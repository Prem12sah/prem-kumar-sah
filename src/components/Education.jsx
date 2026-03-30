import { EDU, CERTS } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" style={{ padding: '112px 0', background: '#080810', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 280, height: 280, borderRadius: '50%', background: 'rgba(108,99,255,.05)', filter: 'blur(100px)', pointerEvents: 'none' }}/>

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="eyebrow">My Journey</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>
            Education &amp; <span style={{ color: '#6c63ff' }}>Credentials</span>
          </h2>
          <div className="accent-line"/>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64 }}>

          {/* Timeline */}
          <div className="reveal">
            <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 28 }}>
              Academic Background
            </h3>
            {EDU.map((item, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: 44, paddingBottom: i < EDU.length - 1 ? 28 : 0 }}>
                {/* Icon dot */}
                <div style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36, borderRadius: '50%', background: '#13131e', border: '2px solid #6c63ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', zIndex: 1 }}>
                  {item.icon}
                </div>
                {/* Connector */}
                {i < EDU.length - 1 && (
                  <div style={{ position: 'absolute', left: 17, top: 36, bottom: 0, width: 1, background: 'linear-gradient(to bottom,rgba(108,99,255,.45),transparent)' }}/>
                )}
                {/* Card */}
                <div className="card-lift" style={{ background: '#13131e', border: '1px solid #1e1e2e', borderRadius: 16, padding: 18, marginLeft: 8 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, color: '#f0f0f8', fontSize: '0.88rem' }}>{item.title}</span>
                    <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.72rem', color: '#6b7280', background: '#080810', padding: '2px 10px', borderRadius: 7, whiteSpace: 'nowrap' }}>{item.period}</span>
                  </div>
                  <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.78rem', color: 'rgba(108,99,255,.85)', marginBottom: item.grade ? 8 : 0 }}>
                    {item.sub}
                  </div>
                  {item.grade && (
                    <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.75rem', color: '#6b7280', background: 'rgba(0,0,0,.3)', padding: '4px 12px', borderRadius: 8, display: 'inline-block' }}>
                      {item.grade}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, color: '#f0f0f8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em' }}>
                Certifications
              </h3>
              <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.72rem', color: '#6b7280', background: '#13131e', border: '1px solid #1e1e2e', padding: '3px 10px', borderRadius: 7 }}>
                {CERTS.length} earned
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {CERTS.map((c, i) => (
                <div key={i} className="card-lift" style={{ background: '#13131e', border: '1px solid #1e1e2e', borderLeft: `2px solid ${c.clr}`, borderRadius: 12, padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 9, background: `${c.clr}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>
                      🏅
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 500, color: '#f0f0f8', fontSize: '0.85rem', lineHeight: 1.4, marginBottom: 3 }}>
                        {c.title}
                      </div>
                      <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.72rem', color: '#6b7280' }}>
                        {c.issuer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
