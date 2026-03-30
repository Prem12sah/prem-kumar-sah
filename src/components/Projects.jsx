import { PROJECTS } from '../data/portfolio'
import { GithubIcon, ExternalIcon } from './Icons'

function ProjectCard({ p }) {
  return (
    <div className="card-lift" style={{
      background: '#13131e', border: '1px solid #1e1e2e',
      borderRadius: 18, overflow: 'hidden', position: 'relative',
    }}>
      {/* Top colour accent bar */}
      <div style={{ height: 2, background: `linear-gradient(90deg,${p.color}bb,transparent)` }}/>

      <div style={{ padding: 22 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', background: `${p.color}18` }}>
              {p.icon}
            </div>
            <div>
              <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, color: '#f0f0f8', fontSize: '0.95rem' }}>{p.title}</div>
              {p.featured && (
                <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.65rem', color: 'rgba(108,99,255,.75)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Featured</div>
              )}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { href: p.github, title: 'GitHub',    icon: <GithubIcon/>   },
              { href: p.demo,   title: 'Live Demo', icon: <ExternalIcon/> },
            ].map((lnk, i) => (
              <a key={i} href={lnk.href} target="_blank" rel="noopener noreferrer" title={lnk.title}
                style={{ width: 32, height: 32, borderRadius: 9, border: '1px solid #1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textDecoration: 'none', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#f0f0f8'; e.currentTarget.style.borderColor = 'rgba(108,99,255,.5)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = '#1e1e2e' }}>
                {lnk.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Description */}
        <p style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.7, marginBottom: 16 }}>
          {p.desc}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {p.tech.map(t => <span key={t} className="ttag">{t}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '112px 0', background: '#0e0e18', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative orb */}
      <div style={{ position: 'absolute', top: '20%', right: 0, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,107,107,.05)', filter: 'blur(100px)', pointerEvents: 'none' }}/>

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="eyebrow">What I've Built</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>
            Featured <span style={{ color: '#6c63ff' }}>Projects</span>
          </h2>
          <div className="accent-line"/>
          <p style={{ marginTop: 18, fontFamily: 'Outfit,sans-serif', color: '#6b7280', fontSize: '0.97rem', maxWidth: 480, lineHeight: 1.72 }}>
            Projects that shaped my skills — each one a real-world challenge solved from scratch.
          </p>
        </div>

        {/* Grid */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 18 }}>
          {PROJECTS.map(p => <ProjectCard key={p.id} p={p}/>)}
        </div>

        {/* GitHub CTA */}
        <div className="reveal" style={{ marginTop: 44, textAlign: 'center' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 28px', borderRadius: 14, border: '1px solid #1e1e2e', color: '#6b7280', fontFamily: 'Outfit,sans-serif', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none', transition: 'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,.5)'; e.currentTarget.style.color = '#f0f0f8'; e.currentTarget.style.background = 'rgba(108,99,255,.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e2e'; e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.background = 'transparent' }}>
            <GithubIcon size={18}/> View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
