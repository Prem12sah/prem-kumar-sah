import { useState } from 'react'
import { ME, W3F_KEY } from '../data/portfolio'
import { SendIcon, SpinnerIcon } from './Icons'

const EMPTY = { name: '', email: '', subject: '', message: '' }

const inputStyle = {
  width: '100%', background: '#080810', border: '1px solid #1e1e2e',
  borderRadius: 12, padding: '12px 16px', fontFamily: 'Outfit,sans-serif',
  fontSize: '0.88rem', color: '#f0f0f8', outline: 'none',
  transition: 'border-color .2s', boxSizing: 'border-box',
}
const labelStyle = {
  display: 'block', fontFamily: 'Outfit,sans-serif', fontSize: '0.7rem',
  color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 8,
}

export default function Contact() {
  const [form,   setForm]   = useState(EMPTY)
  const [status, setStatus] = useState('idle')   // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('')

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    const { name, email, subject, message } = form
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus('error'); setErrMsg('Please fill in all fields.'); return
    }
    setStatus('sending')
    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: W3F_KEY, name, email, subject, message, from_name: name, replyto: email }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success'); setForm(EMPTY)
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error'); setErrMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error'); setErrMsg('Network error. Please check your connection and try again.')
    }
  }

  const isSending = status === 'sending'

  const contactItems = [
    { icon: '✉️', label: 'Email',    val: ME.email,    href: `mailto:${ME.email}` },
    { icon: '📍', label: 'Location', val: ME.location, href: 'https://maps.google.com/?q=Kathmandu,Nepal' },
  ]

  return (
    <section id="contact" style={{ padding: '112px 0', background: '#0e0e18', position: 'relative', overflow: 'hidden' }}>
      {/* Top divider */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right,transparent,rgba(108,99,255,.35),transparent)' }}/>
      {/* Ambient orb */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 320, height: 320, borderRadius: '50%', background: 'rgba(108,99,255,.06)', filter: 'blur(100px)', pointerEvents: 'none' }}/>

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="eyebrow">Let's Talk</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>
            Get In <span style={{ color: '#6c63ff' }}>Touch</span>
          </h2>
          <div className="accent-line"/>
          <p style={{ marginTop: 18, fontFamily: 'Outfit,sans-serif', color: '#6b7280', fontSize: '0.97rem', maxWidth: 460, lineHeight: 1.72 }}>
            Have a project in mind, or just want to say hello? Fill the form and I'll reply directly to your inbox.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 40 }}>

          {/* ── Info column ── */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {contactItems.map((d, i) => (
              <a key={i} href={d.href}
                target={d.label === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#13131e', border: '1px solid #1e1e2e', borderRadius: 14, padding: 16, textDecoration: 'none', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,.4)'; e.currentTarget.style.background = 'rgba(108,99,255,.05)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e2e'; e.currentTarget.style.background = '#13131e' }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(108,99,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem', flexShrink: 0 }}>
                  {d.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.7rem', color: '#6b7280', marginBottom: 2 }}>{d.label}</div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 500, color: '#f0f0f8', fontSize: '0.88rem' }}>{d.val}</div>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div style={{ background: '#13131e', border: '1px solid #1e1e2e', borderRadius: 14, padding: 18 }}>
              <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>
                Social
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {[{ l: 'GitHub', h: ME.github }, { l: 'LinkedIn', h: ME.linkedin }].map((s, i) => (
                  <a key={i} href={s.h} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, padding: 10, borderRadius: 10, border: '1px solid #1e1e2e', textAlign: 'center', fontSize: '0.8rem', fontFamily: 'Outfit,sans-serif', color: '#6b7280', textDecoration: 'none', transition: 'all .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,.45)'; e.currentTarget.style.color = '#6c63ff' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e2e'; e.currentTarget.style.color = '#6b7280' }}>
                    {s.l}
                  </a>
                ))}
              </div>
            </div>

            
          </div>

          {/* ── Form column ── */}
          <div className="reveal">
            {/* Success screen */}
            {status === 'success' ? (
              <div style={{ background: '#13131e', border: '1px solid rgba(67,233,123,.3)', borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, minHeight: 360, textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(67,233,123,.12)', border: '2px solid rgba(67,233,123,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', animation: 'pulseGlow 2s ease-in-out infinite' }}>
                  ✅
                </div>
                <div>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, color: '#43e97b', fontSize: '1.2rem', marginBottom: 8 }}>Message Sent!</div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 300 }}>
                    Thanks for reaching out! Your message has been delivered to{' '}
                    <span style={{ color: '#6c63ff' }}>{ME.email}</span>. I'll get back to you soon.
                  </div>
                </div>
                <button onClick={() => setStatus('idle')}
                  style={{ padding: '10px 24px', borderRadius: 10, border: '1px solid rgba(67,233,123,.35)', background: 'transparent', color: '#43e97b', fontFamily: 'Outfit,sans-serif', fontSize: '0.85rem', cursor: 'pointer', transition: 'all .2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(67,233,123,.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ background: '#13131e', border: '1px solid #1e1e2e', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 18 }}>

                {/* Error banner */}
                {status === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 12, background: 'rgba(255,107,107,.09)', border: '1px solid rgba(255,107,107,.3)', color: '#ff6b6b' }}>
                    <span>⚠️</span>
                    <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.85rem', flex: 1 }}>{errMsg}</span>
                    <button onClick={() => setStatus('idle')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff6b6b', opacity: 0.7, fontSize: '1rem' }}>✕</button>
                  </div>
                )}

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input name="name" value={form.name} onChange={change} placeholder="John Doe"
                      disabled={isSending} style={{ ...inputStyle, opacity: isSending ? 0.6 : 1 }}
                      onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,.55)'}
                      onBlur={e => e.target.style.borderColor = '#1e1e2e'}/>
                  </div>
                  <div>
                    <label style={labelStyle}>Your Email *</label>
                    <input name="email" type="email" value={form.email} onChange={change} placeholder="john@example.com"
                      disabled={isSending} style={{ ...inputStyle, opacity: isSending ? 0.6 : 1 }}
                      onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,.55)'}
                      onBlur={e => e.target.style.borderColor = '#1e1e2e'}/>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={labelStyle}>Subject *</label>
                  <input name="subject" value={form.subject} onChange={change} placeholder="Project Inquiry / Collaboration"
                    disabled={isSending} style={{ ...inputStyle, opacity: isSending ? 0.6 : 1 }}
                    onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,.55)'}
                    onBlur={e => e.target.style.borderColor = '#1e1e2e'}/>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" value={form.message} onChange={change} rows={5}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    disabled={isSending} style={{ ...inputStyle, resize: 'none', opacity: isSending ? 0.6 : 1 }}
                    onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,.55)'}
                    onBlur={e => e.target.style.borderColor = '#1e1e2e'}/>
                </div>

                {/* Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.75rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#43e97b', display: 'inline-block' }}/>
                    Delivered to <span style={{ color: '#6c63ff', marginLeft: 3 }}>{ME.email}</span>
                  </div>
                  <button type="submit" disabled={isSending} className="btn-grad"
                    style={{ padding: '12px 26px', borderRadius: 12, color: '#fff', fontFamily: 'Outfit,sans-serif', fontWeight: 600, fontSize: '0.88rem', border: 'none', cursor: isSending ? 'not-allowed' : 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, opacity: isSending ? 0.75 : 1, minWidth: 160, justifyContent: 'center' }}>
                    {isSending ? <><SpinnerIcon/> Sending…</> : <><SendIcon/> Send Message</>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
