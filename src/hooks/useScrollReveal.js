import { useEffect, useState, useRef } from 'react'

/** Adds .visible class to all .reveal elements when they enter viewport */
export function useScrollReveal(threshold = 0.1) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })
}

/** Typewriter effect cycling through an array of words */
export function useTypewriter(words, speed = 90, pause = 2000) {
  const [text, setText]   = useState('')
  const [wi, setWi]       = useState(0)
  const [ci, setCi]       = useState(0)
  const [del, setDel]     = useState(false)

  useEffect(() => {
    const cur = words[wi]
    const id = setTimeout(() => {
      if (!del) {
        if (ci < cur.length) { setText(cur.slice(0, ci + 1)); setCi(c => c + 1) }
        else setTimeout(() => setDel(true), pause)
      } else {
        if (ci > 0) { setText(cur.slice(0, ci - 1)); setCi(c => c - 1) }
        else { setDel(false); setWi(w => (w + 1) % words.length) }
      }
    }, del ? speed / 2 : speed)
    return () => clearTimeout(id)
  }, [ci, del, wi, words, speed, pause])

  return text
}

/** Tracks which section is currently in view — for active nav highlight */
export function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const secs = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.35 }
    )
    secs.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])
  return active
}

/** Triggers a boolean when a ref element enters viewport — used for skill bars */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}
