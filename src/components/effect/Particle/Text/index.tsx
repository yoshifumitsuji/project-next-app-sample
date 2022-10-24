import { useEffect, useCallback, useMemo, useRef, useState } from 'react'

type Props = {
  width: number
  height: number
  colors: string[]
  text: string
}

class Particle {
  x: number
  y: number
  dest: { x: number; y: number }
  r: number
  vx: number
  vy: number
  accX: number
  accY: number
  friction: number
  color: string

  constructor(x: number, y: number, ww: number, wh: number, color: string) {
    this.x = Math.random() * ww
    this.y = Math.random() * wh
    this.dest = {
      x: x,
      y: y,
    }
    this.r = Math.random() * 1 + 2
    this.vx = (Math.random() - 0.5) * 10
    this.vy = (Math.random() - 0.5) * 10
    this.accX = 0
    this.accY = 0
    this.friction = Math.random() * 0.01 + 0.94
    this.color = color
  }
}

export const Text = (props: Props) => {
  const loaded = useRef(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(canvasRef.current)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  const [particles, setParticles]: any[] = useState([])
  const [radius, setRadius] = useState(1)
  const mouse = useMemo(() => ({ x: 0, y: 0 }), [])

  const onMouseMove = useCallback(
    (e: any) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    },
    [mouse]
  )

  const onTouchMove = useCallback(
    (e: any) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY
      }
    },
    [mouse]
  )

  const onTouchEnd = useCallback(() => {
    mouse.x = -9999
    mouse.y = -9999
  }, [mouse])

  const onMouseClick = useCallback(() => {
    const r = radius === 5 ? 0 : radius + 1
    setRadius(r)
  }, [radius])

  const render = useCallback(() => {
    if (!canvas || !context) return

    context.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(render)

    for (let i = 0; i < particles.length; i++) {
      particles[i].accX = (particles[i].dest.x - particles[i].x) / 1000
      particles[i].accY = (particles[i].dest.y - particles[i].y) / 1000
      particles[i].vx += particles[i].accX
      particles[i].vy += particles[i].accY
      particles[i].vx *= particles[i].friction
      particles[i].vy *= particles[i].friction

      particles[i].x += particles[i].vx
      particles[i].y += particles[i].vy

      context.fillStyle = particles[i].color
      context.beginPath()
      context.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI * 2)
      context.fill()

      const a = particles[i].x - mouse.x
      const b = particles[i].y - mouse.y

      const distance = Math.sqrt(a * a + b * b)

      if (distance < radius * 70) {
        particles[i].accX = (particles[i].x - mouse.x) / 100
        particles[i].accY = (particles[i].y - mouse.y) / 100
        particles[i].vx += particles[i].accX
        particles[i].vy += particles[i].accY
      }
    }
  }, [canvas, context, mouse, particles, radius])

  const init = useCallback(() => {
    if (!canvas || !context) return

    const ww = (canvas.width = props.width)
    const wh = (canvas.height = props.height)

    context.clearRect(0, 0, canvas.width, canvas.height)

    context.font = 'bold ' + ww / 10 + 'px sans-serif'
    context.textAlign = 'center'
    context.fillText(props.text, ww / 2, wh / 2)

    const data = context.getImageData(0, 0, ww, wh).data
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.globalCompositeOperation = 'screen'

    const particles = []

    for (let i = 0; i < ww; i += Math.round(ww / 150)) {
      for (let j = 0; j < wh; j += Math.round(ww / 150)) {
        const color = props.colors[Math.floor(Math.random() * 6)]
        if (data[(i + j * ww) * 4 + 3] > 150) {
          particles.push(new Particle(i, j, ww, wh, color))
        }
      }
    }

    setParticles(particles)
  }, [props, canvas, context])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    canvas.width = props.width
    canvas.height = props.height

    const canvasContext = canvas.getContext('2d')

    setCanvas(canvas)
    setContext(canvasContext)
  }, [props])

  useEffect(() => {
    if (!canvas || !context || loaded.current) return

    window.addEventListener('resize', init)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('click', onMouseClick)
    window.addEventListener('touchend', onTouchEnd)

    init()

    loaded.current = true
  }, [canvas, context, init, render, onMouseClick, onMouseMove, onTouchMove, onTouchEnd])

  useEffect(() => {
    if (particles.length === 0) return
    requestAnimationFrame(render)
  }, [particles, render])

  return <canvas ref={canvasRef}></canvas>
}
