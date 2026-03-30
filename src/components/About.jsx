import { ME } from '../data/portfolio'
import { goTo } from '../utils/helpers'

export default function About() {
  const cards = [
    { icon: '🎓', title: 'B.E. Computer Science', sub: 'Chandigarh University' },
    { icon: '📍', title: 'Kathmandu, Nepal',       sub: 'Open to remote & relocation' },
    { icon: '💼', title: 'Full Stack Developer',   sub: 'MERN • Java • Python' },
    { icon: '🏆', title: '200+ LeetCode',          sub: 'Consistent problem-solver' },
  ]

  return (
    <section id="about" style={{ padding: '112px 0', background: '#0e0e18', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 360, height: 360, borderRadius: '50%', background: 'rgba(108,99,255,.05)', filter: 'blur(110px)', pointerEvents: 'none' }}/>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="eyebrow">Who I Am</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>
            About <span style={{ color: '#6c63ff' }}>Me</span>
          </h2>
          <div className="accent-line"/>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 48 }}>
          {/* Bio */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              <><strong style={{ color: '#f0f0f8' }}>Prem Kumar Sah</strong> — a passionate software developer from Nepal graduated with a B.E. in Computer Science at Chandigarh University. I love turning ideas into real, functional products.</>,
              <>From building <span style={{ color: '#6c63ff', fontWeight: 500 }}>full-stack web apps</span> with the MERN stack to Spring Boot backends and exploring AI/ML, I enjoy tackling challenges across the entire stack.</>,
              <>When I'm not coding, I'm solving problems on <span style={{ color: '#6c63ff', fontWeight: 500 }}>LeetCode</span>, earning certifications, or exploring new tech to stay ahead.</>,
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.97rem', color: '#6b7280', lineHeight: 1.78 }}>{p}</p>
            ))}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 8 }}>
              <a href={`mailto:${ME.email}`} className="btn-grad"
                style={{ padding: '12px 24px', borderRadius: 12, color: '#fff', fontFamily: 'Outfit,sans-serif', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                Get In Touch
              </a>
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer"
                style={{ padding: '12px 24px', borderRadius: 12, color: '#6b7280', fontFamily: 'Outfit,sans-serif', fontSize: '0.88rem', border: '1px solid #1e1e2e', textDecoration: 'none', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#f0f0f8'; e.currentTarget.style.borderColor = 'rgba(108,99,255,.4)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = '#1e1e2e' }}>
                LeetCode Profile →
              </a>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {cards.map((c, i) => (
              <div key={i} className="card-lift" style={{ background: '#13131e', border: '1px solid #1e1e2e', borderRadius: 18, padding: 20 }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.88rem', marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.75rem', color: '#6b7280' }}>{c.sub}</div>
              </div>
            ))}
            <div className="card-lift" style={{ gridColumn: '1/-1', background: 'linear-gradient(135deg,rgba(108,99,255,.1),rgba(255,107,107,.05))', border: '1px solid rgba(108,99,255,.2)', borderRadius: 18, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.72rem', color: '#6b7280' }}>Phone</div>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.9rem' }}>{ME.phone}</div>
                </div>
                <div style={{ width: 1, height: 32, background: '#1e1e2e' }}/>
                <div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.72rem', color: '#6b7280' }}>Email</div>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.9rem' }}>{ME.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
