import { submitContactMessage } from '../src/server/contact.ts'

const maxRequestBytes = 10_000

interface ContactApiRequest {
  method?: string
  headers: {
    'content-type'?: string
    'content-length'?: string
    origin?: string
    host?: string
  }
  body: unknown
}

interface ContactApiResponse {
  setHeader(name: string, value: string): void
  status(code: number): ContactApiResponse
  json(body: unknown): ContactApiResponse
}

export default async function handler(req: ContactApiRequest, res: ContactApiResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const contentType = req.headers['content-type'] ?? ''
  if (!contentType.includes('application/json')) {
    return res.status(415).json({ error: 'Send the form as JSON.' })
  }

  const contentLength = Number(req.headers['content-length'])
  if (Number.isFinite(contentLength) && contentLength > maxRequestBytes) {
    return res.status(413).json({ error: 'The submitted message is too large.' })
  }

  const origin = req.headers.origin
  const host = req.headers.host
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return res.status(403).json({ error: 'Request origin is not allowed.' })
      }
    } catch {
      return res.status(403).json({ error: 'Request origin is not allowed.' })
    }
  }

  const result = await submitContactMessage(req.body, {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.CONTACT_FROM_EMAIL,
    to: process.env.CONTACT_TO_EMAIL,
  })

  return res.status(result.status).json(result.body)
}
