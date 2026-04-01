import { useEffect, useRef } from 'react'

const PETAL_COUNT = 70

const PETAL_TYPES = [
  { rgb: [212, 175, 55] },    // Classic gold
  { rgb: [232, 197, 71] },    // Bright gold
  { rgb: [200, 168, 80] },    // Antique gold
  { rgb: [245, 235, 210] },   // Cream
  { rgb: [220, 185, 160] },   // Soft rose
]

class Petal {
  constructor(w, h, randomY = false) {
    this.w = w
    this.h = h
    this.reset()
    if (randomY) this.y = Math.random() * h
  }

  reset() {
    this.x          = Math.random() * this.w
    this.y          = -(Math.random() * 100 + 40)
    this.drift      = (Math.random() - 0.5) * 0.3
    this.angle      = Math.random() * Math.PI * 2
    this.spin       = (Math.random() - 0.5) * 0.01
    this.wobbleAmp  = Math.random() * 0.45 + 0.15
    this.wobbleSpd  = Math.random() * 0.008 + 0.003
    this.type       = PETAL_TYPES[Math.floor(Math.random() * PETAL_TYPES.length)]

    // Depth layers: far → mid → close
    this.depth = Math.random()
    if (this.depth > 0.75) {
      // CLOSE — large, bright, slightly fast
      this.size    = Math.random() * 7 + 6        // 6-13px
      this.opacity = Math.random() * 0.2 + 0.15   // 0.15-0.35
      this.speed   = Math.random() * 0.5 + 0.3
    } else if (this.depth > 0.35) {
      // MID — medium
      this.size    = Math.random() * 5 + 4         // 4-9px
      this.opacity = Math.random() * 0.15 + 0.1   // 0.1-0.25
      this.speed   = Math.random() * 0.35 + 0.2
    } else {
      // FAR — small, faint, slow
      this.size    = Math.random() * 3.5 + 2.5     // 2.5-6px
      this.opacity = Math.random() * 0.1 + 0.06   // 0.06-0.16
      this.speed   = Math.random() * 0.2 + 0.1
    }
  }

  update(t) {
    this.y     += this.speed
    this.x     += this.drift + Math.sin(t * this.wobbleSpd) * this.wobbleAmp
    this.angle += this.spin
    if (this.y > this.h + 50) this.reset()
    if (this.x < -30) this.x = this.w + 30
    if (this.x > this.w + 30) this.x = -30
  }

  draw(ctx) {
    const s = this.size
    const { rgb } = this.type
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle)
    ctx.globalAlpha = this.opacity

    // Glow for close petals
    if (this.depth > 0.75) {
      ctx.shadowColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.18)`
      ctx.shadowBlur = 10
    }

    ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`

    // Organic petal shape
    ctx.beginPath()
    ctx.moveTo(0, -s * 1.1)
    ctx.bezierCurveTo(s * 0.7, -s * 0.6, s * 0.9, s * 0.4, 0, s * 1.1)
    ctx.bezierCurveTo(-s * 0.9, s * 0.4, -s * 0.7, -s * 0.6, 0, -s * 1.1)
    ctx.fill()

    ctx.restore()
  }
}

export default function PetalsCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const petals = Array.from({ length: PETAL_COUNT }, () => new Petal(w, h, true))

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      petals.forEach(p => { p.w = w; p.h = h })
    }

    window.addEventListener('resize', handleResize)

    let frame = 0
    let animId

    const animate = () => {
      frame++
      ctx.clearRect(0, 0, w, h)
      petals.forEach(p => {
        p.update(frame)
        p.draw(ctx)
      })
      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[8]"
    />
  )
}
