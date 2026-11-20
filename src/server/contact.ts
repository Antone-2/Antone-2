export interface ContactEmailSettings {
  apiKey?: string
  from?: string
  to?: string
}

export type ContactResult = {
  status: number
  body: { message: string } | { error: string }
}

const subjectLabels: Record<string, string> = {
  'full-time': 'Full-Time Role',
  contract: 'Contract / Freelance',
  technical: 'Technical Discussion',
  other: 'Other',
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function error(status: number, message: string): ContactResult {
  return { status, body: { error: message } }
}

export async function submitContactMessage(
  input: unknown,
  settings: ContactEmailSettings,
  fetcher: typeof fetch = fetch,
): Promise<ContactResult> {
  if (!isRecord(input)) {
    return error(400, 'Please complete all required fields.')
  }

  if (typeof input.website === 'string' && input.website.trim()) {
    return error(400, 'Unable to process this message.')
  }

  const name = typeof input.name === 'string' ? input.name.trim().replace(/[\r\n\t]+/g, ' ') : ''
  const email = typeof input.email === 'string' ? input.email.trim() : ''
  const subject = typeof input.subject === 'string' ? input.subject : ''
  const message = typeof input.message === 'string' ? input.message.trim() : ''

  if (name.length < 2 || name.length > 100) {
    return error(400, 'Name must be between 2 and 100 characters.')
  }

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return error(400, 'Enter a valid email address.')
  }

  if (!Object.hasOwn(subjectLabels, subject)) {
    return error(400, 'Choose a contact topic.')
  }

  if (message.length < 10 || message.length > 5000) {
    return error(400, 'Message must be between 10 and 5000 characters.')
  }

  if (!settings.apiKey || !settings.from || !settings.to) {
    return error(503, 'Message delivery is not configured. Please email me directly.')
  }

  const subjectLabel = subjectLabels[subject]

  try {
    const response = await fetcher('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${settings.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: settings.from,
        to: [settings.to],
        reply_to: email,
        subject: `Portfolio contact: ${subjectLabel}`,
        text: `Name: ${name}\nEmail: ${email}\nTopic: ${subjectLabel}\n\n${message}`,
      }),
    })

    if (!response.ok) {
      console.error('[contact] Email provider returned status', response.status)
      return error(502, 'Unable to send your message right now. Please try again or email me directly.')
    }

    return { status: 200, body: { message: 'Message sent.' } }
  } catch (cause) {
    console.error(
      '[contact] Email provider request failed',
      cause instanceof Error ? cause.message : 'Unknown provider error',
    )
    return error(502, 'Unable to send your message right now. Please try again or email me directly.')
  }
}
