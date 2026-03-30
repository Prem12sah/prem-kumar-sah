import { useState, useEffect } from 'react'
import { NAV, ME } from '../data/portfolio'
import { goTo } from '../utils/helpers'
import { useActiveSection } from '../hooks/useScrollReveal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const active                  = useActiveSection()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    background:    scrolled ? 'rgba(8,8,16,0.88)' : 'transparent',
    borderBottom:  scrolled ? '1px solid #1e1e2e'  : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    transition: 'all 0.3s ease',
  }

  const linkStyle = (id) => ({
    fontFamily: 'Outfit,sans-serif', fontSize: '0.7rem',
    letterSpacing: '0.16em', textTransform: 'uppercase',
    background: 'none', border: 'none', cursor: 'pointer',
    color: active === id ? '#6c63ff' : '#6b7280',
    transition: 'color 0.2s',
  })

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => goTo('#home')} style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>
          PS<span style={{ color: '#6c63ff' }}>.</span>
        </button>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0 }}
          className="hidden md:flex">
          {NAV.map(n => (
            <li key={n.h}>
              <button onClick={() => goTo(n.h)} style={linkStyle(n.h.replace('#', ''))}>{n.l}</button>
            </li>
          ))}
        </ul>

        {/* Hire me CTA */}
        <a href={`mailto:${ME.email}`}
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 10, border: '1px solid rgba(108,99,255,0.45)', color: '#6c63ff', fontSize: '0.75rem', fontFamily: 'Outfit,sans-serif', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#6c63ff'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6c63ff' }}
        >Hire Me ✦</a>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)}
          className="flex md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 4 }}>
          {[
            { t: open ? 'rotate(45deg) translateY(7px)'  : 'none' },
            { t: 'none', opacity: open ? 0 : 1 },
            { t: open ? 'rotate(-45deg) translateY(-7px)' : 'none' },
          ].map((s, i) => (
            <span key={i} style={{ width: 20, height: 2, background: '#f0f0f8', display: 'block', borderRadius: 2, transition: 'all 0.2s', transform: s.t, opacity: s.opacity ?? 1 }}/>
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mmenu" style={{ background: '#0e0e18', borderTop: '1px solid #1e1e2e', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {NAV.map(n => (
            <button key={n.h} onClick={() => { goTo(n.h); setOpen(false) }}
              style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Outfit,sans-serif', fontSize: '0.8rem', color: '#6b7280', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {n.l}
            </button>
          ))}
          <a href={`mailto:${ME.email}`}
            style={{ textAlign: 'center', padding: 10, borderRadius: 10, background: '#6c63ff', color: '#fff', fontSize: '0.8rem', fontFamily: 'Outfit,sans-serif', textDecoration: 'none' }}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
