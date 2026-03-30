import { useEffect } from 'react'

/**
 * Mounts the custom magnetic cursor with colour trail drag effect.
 * Call once inside App — it manipulates #cur-dot and #cur-ring DOM nodes.
 */
export function useCursor() {
  useEffect(() => {
    const dot  = document.getElementById('cur-dot')
    const ring = document.getElementById('cur-ring')
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx, ry = my
    let raf
    let tCount = 0, lastT = 0
    let prevX = mx, prevY = my

    const COLORS = [
      'rgba(108,99,255,',
      'rgba(167,139,250,',
      'rgba(196,181,253,',
      'rgba(67,233,123,',
      'rgba(99,179,237,',
    ]

    function spawnTrail(x, y, spd) {
      const now = Date.now()
      if (now - lastT < 28 || spd < 3) return
      lastT = now
      const el = document.createElement('div')
      el.className = 'cur-trail'
      const sz  = Math.random() * 8 + 4
      const clr = COLORS[tCount % COLORS.length]
      const al  = (Math.random() * 0.4 + 0.3).toFixed(2)
      el.style.cssText = [
        `width:${sz}px`, `height:${sz}px`,
        `left:${x}px`,   `top:${y}px`,
        `background:${clr}${al})`,
        `box-shadow:0 0 ${sz * 2}px ${clr}.6)`,
      ].join(';')
      document.body.appendChild(el)
      tCount++
      setTimeout(() => el.parentNode?.removeChild(el), 640)
    }

    function onMove(e) {
      mx = e.clientX; my = e.clientY
      dot.style.left = `${mx}px`; dot.style.top = `${my}px`
      const dx = mx - prevX, dy = my - prevY
      spawnTrail(mx, my, Math.sqrt(dx * dx + dy * dy))
      prevX = mx; prevY = my
    }

    function loop() {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      ring.style.left = `${rx}px`
      ring.style.top  = `${ry}px`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const SEL = 'a,button,input,textarea,select,label,[role="button"]'
    const onOver = e => { if (e.target.closest(SEL)) document.body.classList.add('cur-hover') }
    const onOut  = e => { if (e.target.closest(SEL)) document.body.classList.remove('cur-hover') }

    function onDown() {
      document.body.classList.add('cur-click')
      for (let i = 0; i < 7; i++) {
        const idx = i
        setTimeout(() => {
          const a = (idx / 7) * Math.PI * 2
          const r = Math.random() * 16 + 8
          spawnTrail(mx + Math.cos(a) * r, my + Math.sin(a) * r, 99)
        }, idx * 16)
      }
    }
    const onUp    = () => document.body.classList.remove('cur-click')
    const onLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0' }
    const onEnter = () => { dot.style.opacity = '1'; ring.style.opacity = '1' }

    window.addEventListener('mousemove',    onMove,   { passive: true })
    document.addEventListener('mouseover',  onOver,   { passive: true })
    document.addEventListener('mouseout',   onOut,    { passive: true })
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove',    onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])
}
