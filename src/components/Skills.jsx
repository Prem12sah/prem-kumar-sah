import { useState } from 'react'
import { SKILLS } from '../data/portfolio'
import { useInView } from '../hooks/useScrollReveal'

function SkillBar({ name, pct, clr, visible }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.88rem', color: '#f0f0f8', fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.75rem', color: '#6b7280' }}>{pct}%</span>
      </div>
      <div style={{ height: 6, background: '#1e1e2e', borderRadius: 99, overflow: 'hidden' }}>
        <div className="sbar" style={{ height: '100%', borderRadius: 99, width: visible ? `${pct}%` : '0%', background: `linear-gradient(90deg,${clr}88,${clr})` }}/>
      </div>
    </div>
  )
}

export default function Skills() {
  const [tab, setTab] = useState('languages')
  const { ref, visible } = useInView(0.15)

  const tabs = [
    { id: 'languages', label: 'Languages', icon: '💻' },
    { id: 'frameworks', label: 'Frameworks', icon: '⚛️' },
    { id: 'tools',      label: 'Tools',      icon: '🛠️' },
  ]

  return (
    <section id="skills" style={{ padding: '112px 0', background: '#080810', position: 'relative', overflow: 'hidden' }} ref={ref}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="eyebrow">What I Know</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>
            My <span style={{ color: '#6c63ff' }}>Skills</span>
          </h2>
          <div className="accent-line"/>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40 }}>

          {/* Bars / Tools */}
          <div className="reveal">
            {/* Tab switcher */}
            <div style={{ display: 'flex', gap: 6, padding: 5, background: '#13131e', border: '1px solid #1e1e2e', borderRadius: 14, marginBottom: 28 }}>
              {tabs.map(t => (
                <button key={t.id}
                  onClick={() => setTab(t.id)}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px 10px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'Outfit,sans-serif', fontSize: '0.78rem', fontWeight: 500, transition: 'all .2s', background: tab === t.id ? '#6c63ff' : 'transparent', color: tab === t.id ? '#fff' : '#6b7280' }}>
                  <span>{t.icon}</span><span>{t.label}</span>
                </button>
              ))}
            </div>

            {tab !== 'tools' && SKILLS[tab].map(s => (
              <SkillBar key={s.name} {...s} visible={visible}/>
            ))}
            {tab === 'tools' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {SKILLS.tools.map((t, i) => (
                  <div key={i} className="card-lift" style={{ background: '#13131e', border: '1px solid #1e1e2e', borderRadius: 14, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: '1.3rem' }}>{t.icon}</span>
                    <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.85rem', color: '#f0f0f8', fontWeight: 500 }}>{t.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right panel */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Core concepts */}
            <div style={{ background: '#13131e', border: '1px solid #1e1e2e', borderRadius: 18, padding: 22 }}>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Core Concepts</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {SKILLS.concepts.map(t => <span key={t} className="ttag">{t}</span>)}
              </div>
            </div>

            {/* Mini stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              {[{ n: '5+', l: 'Languages' }, { n: '6+', l: 'Frameworks' }, { n: '8+', l: 'Certs' }].map((s, i) => (
                <div key={i} className="card-lift" style={{ background: '#13131e', border: '1px solid #1e1e2e', borderRadius: 14, padding: 16, textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#6c63ff' }}>{s.n}</div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.72rem', color: '#6b7280', marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Exploring */}
            <div style={{ background: 'rgba(108,99,255,.08)', border: '1px solid rgba(108,99,255,.2)', borderRadius: 18, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: '1.2rem' }}>🔭</span>
                <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.88rem' }}>Currently Exploring</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {SKILLS.exploring.map(t => (
                  <span key={t} style={{ padding: '4px 12px', borderRadius: 999, background: 'rgba(108,99,255,.15)', color: '#a09bff', fontSize: '0.72rem', fontFamily: 'Outfit,sans-serif', border: '1px solid rgba(108,99,255,.25)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
