import { ME, NAV } from '../data/portfolio'
import { goTo } from '../utils/helpers'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#080810', borderTop: '1px solid #1e1e2e', padding: '48px 0' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 28, marginBottom: 36 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#fff', marginBottom: 10 }}>
              PS<span style={{ color: '#6c63ff' }}>.</span>
            </div>
            <p style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.7, maxWidth: 240 }}>
              Full-stack developer from Nepal building clean, efficient digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 16 }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV.map(n => (
                <button key={n.h} onClick={() => goTo(n.h)}
                  style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Outfit,sans-serif', fontSize: '0.85rem', color: '#6b7280', transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = '#6c63ff'}
                  onMouseLeave={e => e.target.style.color = '#6b7280'}>
                  {n.l}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 16 }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href={`mailto:${ME.email}`}
                style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = '#6c63ff'}
                onMouseLeave={e => e.target.style.color = '#6b7280'}>
                {ME.email}
              </a>
              <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.85rem', color: '#6b7280' }}>{ME.phone}</span>
              <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.85rem', color: '#6b7280' }}>{ME.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1e1e2e', paddingTop: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <p style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.75rem', color: '#6b7280' }}>
            © {year} Prem Kumar Sah. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.75rem', color: '#6b7280' }}>
            Designed &amp; Built with ❤️ by <span style={{ color: '#6c63ff' }}>Prem Kumar Sah</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
