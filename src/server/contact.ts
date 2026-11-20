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

const architecturalLoaderSVG = `
<svg width="200" height="131" viewBox="0 0 320 210" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block; margin:0 auto;">
  <path d="M38 81 160 24l122 57v83l-122 31-122-31V81Z" stroke="#d4a843" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" style="opacity:0.3"/>
  <path d="m38 81 122 34 122-34M160 115v80" stroke="#d4a843" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="m61 92 31 9v43l-31-8V92Zm48 14 31 9v43l-31-8v-44Zm109-5 31-9v44l-31 8v-43Zm-48 14 31-9v44l-31 8v-43Z" stroke="#999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" style="opacity:0.4"/>
  <path d="m61 151 99 26 99-26M160 24v30m-10-25 10 5 10-10M25 181l135 25 135-25" stroke="#d4a843" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M133 108v38l27 7 27-7v-38m-54 19 27 7 27-7" stroke="#999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" style="opacity:0.4"/>
</svg>
`

function buildNotificationEmail({ name, email, subjectLabel, message }: { name: string; email: string; subjectLabel: string; message: string }): { html: string; text: string } {
  const escapedMessage = message.replace(/\n/g, '<br>')
  const escapedName = name.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
  const escapedEmail = email.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
  const escapedSubject = subjectLabel.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>New Portfolio Contact</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; background: #0a0a0a; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #f5f5f3; }
    .wrapper { min-height: 100vh; padding: 40px 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #121212; border: 1px solid #2a2a2a; border-radius: 16px; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
    .header { background: linear-gradient(135deg, #1a1a1a 0%, #121212 100%); border-bottom: 1px solid #2a2a2a; padding: 32px; text-align: center; }
    .header h1 { margin: 0 0 8px; font-family: 'Fraunces', Georgia, serif; font-size: 28px; font-weight: 600; letter-spacing: -0.03em; color: #f5f5f3; }
    .header .badge { display: inline-block; padding: 6px 14px; background: rgba(212, 168, 67, 0.12); border: 1px solid rgba(212, 168, 67, 0.3); border-radius: 9999px; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: #d4a843; }
    .content { padding: 32px; }
    .field { margin-bottom: 24px; }
    .field:last-of-type { margin-bottom: 0; }
    .field-label { display: block; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #787872; margin-bottom: 6px; }
    .field-value { font-size: 16px; color: #f5f5f3; word-break: break-word; }
    .field-value a { color: #d4a843; text-decoration: none; }
    .field-value a:hover { text-decoration: underline; }
    .message-box { background: #161616; border: 1px solid #2a2a2a; border-radius: 12px; padding: 20px; white-space: pre-wrap; font-size: 15px; line-height: 1.7; color: #e8e8e3; }
    .divider { height: 1px; background: linear-gradient(90deg, transparent, #2a2a2a, transparent); margin: 32px 0; }
    .signature { text-align: center; padding-top: 8px; }
    .signature-name { margin: 16px 0 4px; font-family: 'Fraunces', Georgia, serif; font-size: 22px; font-weight: 600; letter-spacing: -0.03em; color: #f5f5f3; }
    .signature-title { font-size: 13px; color: #787872; letter-spacing: 0.12em; text-transform: uppercase; }
    .footer { background: #0a0a0a; border-top: 1px solid #2a2a2a; padding: 24px 32px; text-align: center; }
    .footer-text { margin: 0; font-size: 12px; color: #787872; }
    .footer-text a { color: #d4a843; text-decoration: none; }
    @media (prefers-color-scheme: light) {
      body { background: #fafaf8; color: #0f0f0e; }
      .card { background: #ffffff; border-color: #e8e8e3; box-shadow: 0 24px 64px rgba(15,15,14,0.12); }
      .header { background: linear-gradient(135deg, #f5f5f3 0%, #ffffff 100%); border-color: #e8e8e3; }
      .header h1 { color: #0f0f0e; }
      .header .badge { background: rgba(184, 134, 11, 0.1); border-color: rgba(184, 134, 11, 0.3); color: #b8860b; }
      .field-label { color: #888882; }
      .field-value { color: #0f0f0e; }
      .field-value a { color: #b8860b; }
      .message-box { background: #f5f5f3; border-color: #e8e8e3; color: #1a1a1a; }
      .divider { background: linear-gradient(90deg, transparent, #e8e8e3, transparent); }
      .signature-name { color: #0f0f0e; }
      .signature-title { color: #888882; }
      .footer { background: #fafaf8; border-color: #e8e8e3; }
      .footer-text { color: #888882; }
      .footer-text a { color: #b8860b; }
    }
    @media (max-width: 480px) {
      .wrapper { padding: 20px 12px; }
      .header { padding: 24px 20px; }
      .header h1 { font-size: 24px; }
      .content { padding: 24px 20px; }
      .field-value { font-size: 15px; }
      .message-box { padding: 16px; font-size: 14px; }
      .footer { padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <h1>New Contact Message</h1>
        <span class="badge">${escapedSubject}</span>
      </div>
      <div class="content">
        <div class="field">
          <span class="field-label">Name</span>
          <span class="field-value">${escapedName}</span>
        </div>
        <div class="field">
          <span class="field-label">Email</span>
          <span class="field-value"><a href="mailto:${escapedEmail}">${escapedEmail}</a></span>
        </div>
        <div class="field">
          <span class="field-label">Topic</span>
          <span class="field-value">${escapedSubject}</span>
        </div>
        <div class="field">
          <span class="field-label">Message</span>
          <div class="message-box">${escapedMessage}</div>
        </div>
        <div class="divider"></div>
        <div class="signature">
          ${architecturalLoaderSVG}
          <p class="signature-name">Kesa Onyango</p>
          <p class="signature-title">Full-stack engineer · Nairobi, Kenya</p>
        </div>
      </div>
      <div class="footer">
        <p class="footer-text">Sent from <a href="https://kesa-portfolio.vercel.app/contact">portfolio contact form</a> · Reply directly to respond</p>
      </div>
    </div>
  </div>
</body>
</html>`

  const text = `New Contact Message: ${subjectLabel}

Name: ${name}
Email: ${email}
Topic: ${subjectLabel}

Message:
${message}

---
Kesa Onyango
Full-stack engineer · Nairobi, Kenya
Sent from portfolio contact form`

  return { html, text }
}

function buildAutoReplyEmail({ name, subjectLabel }: { name: string; subjectLabel: string }): { html: string; text: string } {
  const escapedName = name.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
  const escapedSubject = subjectLabel.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>Thanks for reaching out</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; background: #0a0a0a; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #f5f5f3; }
    .wrapper { min-height: 100vh; padding: 40px 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #121212; border: 1px solid #2a2a2a; border-radius: 16px; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
    .header { background: linear-gradient(135deg, #1a1a1a 0%, #121212 100%); border-bottom: 1px solid #2a2a2a; padding: 40px 32px; text-align: center; }
    .header h1 { margin: 0 0 12px; font-family: 'Fraunces', Georgia, serif; font-size: 32px; font-weight: 600; letter-spacing: -0.03em; color: #f5f5f3; }
    .header p { margin: 0; font-size: 16px; color: #a8a8a3; }
    .content { padding: 40px 32px; }
    .intro { font-size: 17px; color: #e8e8e3; margin-bottom: 24px; }
    .intro strong { color: #f5f5f3; }
    .details { background: #161616; border: 1px solid #2a2a2a; border-radius: 12px; padding: 24px; margin-bottom: 24px; }
    .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #2a2a2a; }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { font-size: 13px; color: #787872; }
    .detail-value { font-size: 14px; color: #f5f5f3; font-weight: 500; text-align: right; }
    .detail-value .accent { color: #d4a843; }
    .note { font-size: 14px; color: #a8a8a3; line-height: 1.7; margin-bottom: 32px; }
    .signature { text-align: center; padding-top: 8px; }
    .signature-name { margin: 16px 0 4px; font-family: 'Fraunces', Georgia, serif; font-size: 22px; font-weight: 600; letter-spacing: -0.03em; color: #f5f5f3; }
    .signature-title { font-size: 13px; color: #787872; letter-spacing: 0.12em; text-transform: uppercase; }
    .footer { background: #0a0a0a; border-top: 1px solid #2a2a2a; padding: 24px 32px; text-align: center; }
    .footer-text { margin: 0; font-size: 12px; color: #787872; }
    .footer-text a { color: #d4a843; text-decoration: none; }
    .social-links { margin-top: 16px; }
    .social-links a { display: inline-block; margin: 0 8px; color: #787872; text-decoration: none; font-size: 13px; }
    .social-links a:hover { color: #d4a843; }
    @media (prefers-color-scheme: light) {
      body { background: #fafaf8; color: #0f0f0e; }
      .card { background: #ffffff; border-color: #e8e8e3; box-shadow: 0 24px 64px rgba(15,15,14,0.12); }
      .header { background: linear-gradient(135deg, #f5f5f3 0%, #ffffff 100%); border-color: #e8e8e3; }
      .header h1 { color: #0f0f0e; }
      .header p { color: #5a5a56; }
      .intro { color: #2a2a2a; }
      .intro strong { color: #0f0f0e; }
      .details { background: #f5f5f3; border-color: #e8e8e3; }
      .detail-row { border-color: #e8e8e3; }
      .detail-label { color: #888882; }
      .detail-value { color: #0f0f0e; }
      .detail-value .accent { color: #b8860b; }
      .note { color: #5a5a56; }
      .signature-name { color: #0f0f0e; }
      .signature-title { color: #888882; }
      .footer { background: #fafaf8; border-color: #e8e8e3; }
      .footer-text { color: #888882; }
      .footer-text a { color: #b8860b; }
      .social-links a { color: #888882; }
      .social-links a:hover { color: #b8860b; }
    }
    @media (max-width: 480px) {
      .wrapper { padding: 20px 12px; }
      .header { padding: 32px 20px; }
      .header h1 { font-size: 26px; }
      .content { padding: 28px 20px; }
      .intro { font-size: 16px; }
      .details { padding: 20px; }
      .detail-row { flex-direction: column; align-items: flex-start; gap: 4px; }
      .detail-value { text-align: left; }
      .footer { padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <h1>Thanks for reaching out, ${escapedName}!</h1>
        <p>I've received your message and will get back to you soon.</p>
      </div>
      <div class="content">
        <p class="intro">Hi <strong>${escapedName}</strong>,</p>
        <p class="intro">Thanks for getting in touch regarding <strong>${escapedSubject}</strong>. I've received your message and typically respond within 24 hours.</p>
        <div class="details">
          <div class="detail-row">
            <span class="detail-label">Your topic</span>
            <span class="detail-value"><span class="accent">${escapedSubject}</span></span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Submitted</span>
            <span class="detail-value">${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</span>
          </div>
        </div>
        <p class="note">In the meantime, feel free to check out my <a href="https://mabawacreations.com" style="color:#d4a843">live platform</a>, connect on <a href="https://linkedin.com/in/kesa-onyango" style="color:#d4a843">LinkedIn</a>, or browse my <a href="https://github.com/Antone-2" style="color:#d4a843">GitHub</a>.</p>
        <div class="signature">
          ${architecturalLoaderSVG}
          <p class="signature-name">Kesa Onyango</p>
          <p class="signature-title">Full-stack engineer · Nairobi, Kenya</p>
        </div>
      </div>
      <div class="footer">
        <p class="footer-text"><a href="https://kesa-portfolio.vercel.app">kesa-portfolio.vercel.app</a> · <a href="mailto:onyangoantone1@gmail.com">onyangoantone1@gmail.com</a></p>
        <div class="social-links">
          <a href="https://linkedin.com/in/kesa-onyango">LinkedIn</a>
          <span style="color:#2a2a2a">·</span>
          <a href="https://github.com/Antone-2">GitHub</a>
          <span style="color:#2a2a2a">·</span>
          <a href="https://mabawacreations.com">Mabawa Creations</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`

  const text = `Thanks for reaching out, ${name}!

I've received your message regarding "${subjectLabel}" and will get back to you within 24 hours.

Submitted: ${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}

In the meantime, feel free to check out my live platform at mabawacreations.com, connect on LinkedIn, or browse my GitHub.

---
Kesa Onyango
Full-stack engineer · Nairobi, Kenya
https://kesa-portfolio.vercel.app`

  return { html, text }
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
  const notificationEmail = buildNotificationEmail({ name, email, subjectLabel, message })
  const autoReplyEmail = buildAutoReplyEmail({ name, subjectLabel })

  try {
    const notificationResponse = await fetcher('https://api.resend.com/emails', {
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
        text: notificationEmail.text,
        html: notificationEmail.html,
      }),
    })

    if (!notificationResponse.ok) {
      console.error('[contact] Notification email failed:', notificationResponse.status)
      return error(502, 'Unable to send your message right now. Please try again or email me directly.')
    }

    // Send auto-reply to sender (non-blocking - don't fail if it fails)
    try {
      await fetcher('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${settings.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: settings.from,
          to: [email],
          subject: `Thanks for reaching out, ${name}!`,
          text: autoReplyEmail.text,
          html: autoReplyEmail.html,
        }),
      })
    } catch (autoReplyError) {
      console.error('[contact] Auto-reply failed (non-blocking):', autoReplyError)
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
