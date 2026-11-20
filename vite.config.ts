import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { submitContactMessage, type ContactEmailSettings } from './src/server/contact.ts'

const maxRequestBytes = 10_000

function contactApiPlugin(settings: ContactEmailSettings): Plugin {
  return {
    name: 'contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res, next) => {
        res.setHeader('Cache-Control', 'no-store')
        res.setHeader('Content-Type', 'application/json; charset=utf-8')

        const respond = (status: number, body: unknown) => {
          res.statusCode = status
          res.end(JSON.stringify(body))
        }

        if (req.method !== 'POST') {
          res.setHeader('Allow', 'POST')
          respond(405, { error: 'Method not allowed.' })
          return
        }

        if (!(req.headers['content-type'] ?? '').includes('application/json')) {
          respond(415, { error: 'Send the form as JSON.' })
          return
        }

        const contentLength = Number(req.headers['content-length'])
        if (Number.isFinite(contentLength) && contentLength > maxRequestBytes) {
          respond(413, { error: 'The submitted message is too large.' })
          return
        }

        const origin = req.headers.origin
        const host = req.headers.host
        if (origin && host) {
          try {
            if (new URL(origin).host !== host) {
              respond(403, { error: 'Request origin is not allowed.' })
              return
            }
          } catch {
            respond(403, { error: 'Request origin is not allowed.' })
            return
          }
        }

        const chunks: Buffer[] = []
        let bodyBytes = 0
        req.on('data', (chunk: Buffer | string) => {
          const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
          bodyBytes += buffer.byteLength
          if (bodyBytes <= maxRequestBytes) chunks.push(buffer)
        })

        req.on('end', async () => {
          if (bodyBytes > maxRequestBytes) {
            respond(413, { error: 'The submitted message is too large.' })
            return
          }

          let payload: unknown
          try {
            payload = JSON.parse(Buffer.concat(chunks).toString('utf8'))
          } catch {
            respond(400, { error: 'Send the form as valid JSON.' })
            return
          }

          const result = await submitContactMessage(payload, settings)
          respond(result.status, result.body)
        })

        req.on('error', next)
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      contactApiPlugin({
        apiKey: env.RESEND_API_KEY,
        from: env.CONTACT_FROM_EMAIL,
        to: env.CONTACT_TO_EMAIL,
      }),
    ],
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
  }
})
