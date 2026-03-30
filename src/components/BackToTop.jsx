import { useState, useEffect } from 'react'
import { UpIcon } from './Icons'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="btn-grad"
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 100,
        width: 40, height: 40, borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: 'none', cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity .3s, transform .3s',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      aria-label="Back to top"
    >
      <UpIcon/>
    </button>
  )
}
