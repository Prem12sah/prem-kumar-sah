import { ME } from '../data/portfolio'
import { goTo } from '../utils/helpers'
import { useTypewriter } from '../hooks/useScrollReveal'
import { GithubIcon, LinkedinIcon } from './Icons'
import profilePhoto from '../assets/profile.jpg'

export default function Hero() {
  const typed = useTypewriter(ME.roles)

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#080810' }}>

      {/* ── Responsive layout CSS (inline style can't do media queries) ── */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          min-height: 88vh;
          align-items: center;
          width: 100%;
        }
        .hero-photo-col {
          display: none;
          position: relative;
          min-height: 580px;
        }
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr 1fr; }
          .hero-photo-col { display: block; }
        }
      `}</style>

      {/* Grid bg */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}>
        <defs>
          <pattern id="pg" width="52" height="52" patternUnits="userSpaceOnUse">
            <path d="M52 0L0 0 0 52" fill="none" stroke="white" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pg)"/>
      </svg>

      {/* Ambient orbs */}
      {[
        { top: '15%', left: '4%', w: 300, clr: 'rgba(108,99,255,0.18)', delay: '0s' },
        { bottom: '18%', right: '3%', w: 240, clr: 'rgba(255,107,107,0.10)', delay: '2s' },
      ].map((o, i) => (
        <div key={i} style={{ position: 'absolute', ...o, width: o.w, height: o.w, borderRadius: '50%', background: `radial-gradient(circle,${o.clr},transparent 70%)`, filter: 'blur(40px)', animation: `pulseGlow 5s ease-in-out infinite ${o.delay}`, pointerEvents: 'none' }}/>
      ))}

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '80px 24px 40px', width: '100%', position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">

          {/* ── LEFT: text ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 20, paddingBottom: 40 }}>

            {/* Available chip */}
            <div style={{ opacity: 0, animation: 'fadeUp .6s .05s ease forwards', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28, padding: '7px 14px', borderRadius: 999, background: 'rgba(67,233,123,.09)', border: '1px solid rgba(67,233,123,.22)', width: 'fit-content' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#43e97b', display: 'inline-block', animation: 'pulseGlow 2s infinite' }}/>
              <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.72rem', color: '#43e97b' }}>Available for opportunities</span>
            </div>

            <span className="eyebrow" style={{ opacity: 0, animation: 'fadeUp .6s .15s ease forwards' }}>Software Engineer</span>

            <h1 style={{ opacity: 0, animation: 'fadeUp .7s .25s ease forwards', fontFamily: 'Syne,sans-serif', fontWeight: 800, lineHeight: 1.04, marginBottom: 16, color: '#fff', fontSize: 'clamp(2.8rem,5.5vw,5rem)' }}>
              Prem<br/>
              <span className="shimmer-name">Kumar Sah</span>
            </h1>

            {/* Typewriter */}
            <div style={{ opacity: 0, animation: 'fadeUp .6s .4s ease forwards', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, minHeight: 36 }}>
              <span style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.2rem', color: '#6b7280', fontWeight: 600 }}>/</span>
              <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1.15rem', color: '#f0f0f8', fontWeight: 300 }}>{typed}</span>
              <span className="tw-cursor"/>
            </div>

            <p style={{ opacity: 0, animation: 'fadeUp .6s .55s ease forwards', fontFamily: 'Outfit,sans-serif', fontSize: '0.97rem', color: '#6b7280', lineHeight: 1.75, maxWidth: 440, marginBottom: 32 }}>
              {ME.bio}
            </p>

            {/* CTAs */}
            <div style={{ opacity: 0, animation: 'fadeUp .6s .7s ease forwards', display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
              <button onClick={() => goTo('#projects')} className="btn-grad"
                style={{ padding: '13px 28px', borderRadius: 12, color: '#fff', fontFamily: 'Outfit,sans-serif', fontWeight: 600, fontSize: '0.88rem', border: 'none', cursor: 'pointer' }}>
                View Projects ✦
              </button>
              <button onClick={() => goTo('#contact')}
                style={{ padding: '13px 28px', borderRadius: 12, color: '#f0f0f8', fontFamily: 'Outfit,sans-serif', fontSize: '0.88rem', border: '1px solid #1e1e2e', background: 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,.5)'; e.currentTarget.style.background = 'rgba(108,99,255,.07)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e2e'; e.currentTarget.style.background = 'transparent' }}>
                Contact Me →
              </button>
            </div>

            {/* Socials + stats */}
            <div style={{ opacity: 0, animation: 'fadeUp .6s .85s ease forwards', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              {[
                { icon: <GithubIcon/>,   href: ME.github,   label: 'GitHub'   },
                { icon: <LinkedinIcon/>, href: ME.linkedin, label: 'LinkedIn' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 38, height: 38, borderRadius: 10, border: '1px solid #1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#6c63ff'; e.currentTarget.style.borderColor = 'rgba(108,99,255,.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = '#1e1e2e' }}>
                  {s.icon}
                </a>
              ))}
              <div style={{ width: 1, height: 32, background: '#1e1e2e' }}/>
              {ME.stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#6c63ff', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.65rem', color: '#6b7280', marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Circle photo — hidden on mobile, shown on desktop via .hero-photo-col ── */}
          <div className="hero-photo-col">

            {/* Glow backdrop */}
            <div style={{ position: 'absolute', top: '50%', right: '6%', transform: 'translateY(-58%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(108,99,255,.22),transparent 68%)', filter: 'blur(36px)', pointerEvents: 'none' }}/>

            {/* Circle */}
            <div className="photo-circle-wrap photo-glow">
              <div className="photo-ring-spin"/>
              <div className="photo-ring-static"/>
              <div className="photo-circle">
                <img src={profilePhoto} alt="Prem Kumar Sah"/>
              </div>
              {/* Accent dots */}
              <div style={{ position: 'absolute', top: -4, right: 18, width: 14, height: 14, borderRadius: '50%', background: '#6c63ff', boxShadow: '0 0 10px rgba(108,99,255,.8)', border: '2px solid #080810', zIndex: 20 }}/>
              <div style={{ position: 'absolute', bottom: 8, left: -4, width: 10, height: 10, borderRadius: '50%', background: '#43e97b', boxShadow: '0 0 8px rgba(67,233,123,.7)', border: '2px solid #080810', zIndex: 20 }}/>
            </div>

            {/* Floating badges */}
            {[
              { top: '12%', left: '0%', delay: '0s',   border: 'rgba(108,99,255,.35)', children: <><div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, color:'#fff', fontSize:'0.9rem' }}>250+ 🏆</div><div style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.7rem', color:'#6b7280', marginTop:2 }}>LeetCode Problems</div></> },
              { top: '38%', left: '-4%', delay: '.8s',  border: 'rgba(67,233,123,.3)',  children: <><div style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.68rem', color:'#6b7280', marginBottom:8 }}>Tech Stack</div><div style={{ display:'flex', gap:6 }}>{['⚛️','☕','🐍','🍃'].map((em,i)=><span key={i} style={{ width:28, height:28, borderRadius:7, background:'rgba(255,255,255,.07)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.9rem' }}>{em}</span>)}</div></> },
              { top: '64%', left: '-2%', delay: '1.5s', border: 'rgba(67,233,123,.28)', children: <div style={{ display:'flex', alignItems:'center', gap:8 }}><span style={{ width:8, height:8, borderRadius:'50%', background:'#43e97b', display:'inline-block', animation:'pulseGlow 2s infinite' }}/><span style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.75rem', color:'#f0f0f8' }}>Let's Build </span></div> },
            ].map((b, i) => (
              <div key={i} className="fbadge" style={{ position: 'absolute', top: b.top, left: b.left, animationDelay: b.delay, background: 'rgba(10,10,20,.92)', border: `1px solid ${b.border}`, borderRadius: 12, padding: '10px 14px', backdropFilter: 'blur(12px)', zIndex: 30 }}>
                {b.children}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'floatY 2.5s ease-in-out infinite' }}>
        <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.6rem', color: '#6b7280', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 20, height: 32, borderRadius: 99, border: '1px solid #1e1e2e', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 5 }}>
          <div className="scroll-dot" style={{ width: 4, height: 8, borderRadius: 99, background: '#6c63ff' }}/>
        </div>
      </div>
    </section>
  )
}
