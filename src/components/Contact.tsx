import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Mail, Globe, FileText, ArrowRight, CheckCircle } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './Icons'
import { useState } from 'react'

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setFormStatus('submitting')
    setFormError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          website: formData.get('website'),
        }),
      })
      const result: unknown = await response.json()

      if (!response.ok) {
        const message = isRecord(result) && typeof result.error === 'string'
          ? result.error
          : 'Unable to send your message right now. Please try again or email me directly.'
        throw new Error(message)
      }

      form.reset()
      setFormStatus('success')
    } catch (cause) {
      setFormError(cause instanceof Error
        ? cause.message
        : 'Unable to send your message right now. Please try again or email me directly.')
      setFormStatus('error')
    }
  }

  const contactItems = [
    {
      icon: Globe,
      label: 'Live Project',
      value: 'mabawacreations.com',
      href: 'https://mabawacreations.com',
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'onyangoantone1@gmail.com',
      href: 'mailto:onyangoantone1@gmail.com',
      external: false,
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kesa-onyango',
      href: 'https://www.linkedin.com/in/kesa-onyango',
      external: true,
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      value: 'github.com/Antone-2',
      href: 'https://github.com/Antone-2',
      external: true,
    },
  ]

  return (
    <section id="contact" className="section section--compact" aria-labelledby="contact-heading" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Atmosphere */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 15% 20%, var(--color-accent-muted) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 80%, rgba(212, 168, 67, 0.06) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <header className={`section-header ${isIntersecting ? 'animate-reveal' : 'opacity-0'}`} style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto', marginBottom: 'var(--space-10)' }}>
          <p className="overline">Get In Touch</p>
          <h2 id="contact-heading" className="display-2 contact-heading" style={{ marginBottom: 'var(--space-4)' }}>
            Have a Role<br className="contact-heading-mobile-break" />{' '}or Project
            <br className="contact-heading-break" />{' '}in Mind?
          </h2>
          <p className="body-lg">
            I'm open to remote full-time and contract software engineering roles. Whether you have
            a specific position or just want to discuss a technical challenge, I'd love to hear from you.
          </p>
        </header>

        <div className={`contact-grid ${isIntersecting ? '' : 'opacity-0'}`} style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-8)',
          alignItems: 'start',
        }} role="list">
          {/* Contact Info */}
          <div className={`contact-info ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} role="listitem">
            <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {contactItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="contact-item card card--interactive touch-target"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-4)',
                    textDecoration: 'none',
                    color: 'inherit',
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <div className="contact-icon" style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--color-accent-muted)',
                    color: 'var(--color-accent)',
                    borderRadius: 'var(--radius-lg)',
                    flexShrink: 0,
                    transition: 'all var(--transition-base)',
                  }} aria-hidden="true">
                    <item.icon className="icon" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="caption" style={{ marginBottom: 'var(--space-1)' }}>{item.label}</p>
                    <p className="body-sm" style={{ color: 'var(--color-fg-muted)', wordBreak: 'break-all' }}>{item.value}</p>
                  </div>
                  {item.external && <ArrowRight className="icon" style={{ color: 'var(--color-fg-subtle)', flexShrink: 0 }} aria-hidden="true" />}
                </a>
              ))}

              <a
                href="/resume.pdf"
                download="Kesa-Onyango-Resume.pdf"
                className="contact-item card card--interactive touch-target"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-4)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div className="contact-icon" style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--color-accent-muted)',
                  color: 'var(--color-accent)',
                  borderRadius: 'var(--radius-lg)',
                  flexShrink: 0,
                }} aria-hidden="true">
                  <FileText className="icon" />
                </div>
                <div className="flex-1">
                  <p className="caption" style={{ marginBottom: 'var(--space-1)' }}>Résumé</p>
                  <p className="body-sm" style={{ color: 'var(--color-fg-muted)' }}>Available for download</p>
                </div>
                <span className="btn btn--secondary btn--sm touch-target" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <FileText className="icon" aria-hidden="true" />
                  <span className="hidden sm:inline">Download</span>
                </span>
              </a>
            </div>

            <div className="availability card card--border-accent" style={{
              background: 'var(--color-accent-muted)',
              borderLeft: '3px solid var(--color-accent)',
              padding: 'var(--space-4)',
              marginTop: 'var(--space-5)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--space-3)',
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--color-success)',
                flexShrink: 0,
                marginTop: '4px',
              }} aria-hidden="true" />
              <div>
                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-1)' }}>Currently Available</p>
                <p className="body-sm" style={{ color: 'var(--color-fg-muted)', margin: 0 }}>
                  Open to remote full-time and contract software engineering roles.
                  Based in Nairobi, Kenya (EAT, UTC+3).
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`contact-form-wrapper ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }} role="listitem">
            <div className="card card--elevated" style={{ padding: 'var(--space-6)' }}>
              <h3 className="heading-2" style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>Send a Message</h3>
              <p className="body" style={{ textAlign: 'center', color: 'var(--color-fg-muted)', marginBottom: 'var(--space-6)' }}>
                Prefer email? <a href="mailto:onyangoantone1@gmail.com" className="link">onyangoantone1@gmail.com</a>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="name" className="label">Name <span style={{ color: 'var(--color-error)' }} aria-hidden="true">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    className="input touch-target"
                    placeholder="Your name"
                    aria-describedby="name-hint"
                  />
                  <span id="name-hint" className="sr-only">Enter your full name</span>
                </div>

                <div>
                  <label htmlFor="email" className="label">Email <span style={{ color: 'var(--color-error)' }} aria-hidden="true">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    className="input touch-target"
                    placeholder="Email address"
                    aria-describedby="email-hint"
                  />
                  <span id="email-hint" className="sr-only">Enter your email address</span>
                </div>

                <div>
                  <label htmlFor="subject" className="label">Subject <span style={{ color: 'var(--color-error)' }} aria-hidden="true">*</span></label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="input touch-target"
                    aria-describedby="subject-hint"
                    style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right var(--space-3) center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em', paddingRight: 'var(--space-10)' }}
                  >
                    <option value="">Select a topic</option>
                    <option value="full-time">Full-Time Role</option>
                    <option value="contract">Contract / Freelance</option>
                    <option value="technical">Technical Discussion</option>
                    <option value="other">Other</option>
                  </select>
                  <span id="subject-hint" className="sr-only">Select the reason for contacting</span>
                </div>

                <div>
                  <label htmlFor="message" className="label">Message <span style={{ color: 'var(--color-error)' }} aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    minLength={10}
                    maxLength={5000}
                    className="input touch-target"
                    placeholder="Tell me about the role, project, or question..."
                    aria-describedby="message-hint"
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  />
                  <span id="message-hint" className="sr-only">Write your message here</span>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn btn--primary btn--lg touch-target"
                  style={{ width: '100%', marginTop: 'var(--space-2)' }}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="icon animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="30 60" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="icon" aria-hidden="true" />
                      Message Sent!
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {formStatus === 'success' && (
                  <p className="body-sm" style={{ textAlign: 'center', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }} role="status">
                    <CheckCircle className="icon" aria-hidden="true" />
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                )}

                {formStatus === 'error' && (
                  <p className="body-sm" style={{ textAlign: 'center', color: 'var(--color-error)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }} role="alert">
                    {formError}
                  </p>
                )}

                <p className="caption" style={{ textAlign: 'center' }}>
                  No spam. Your information is only used to respond to your message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}