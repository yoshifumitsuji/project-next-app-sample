import { useEffect, useRef, useState, useCallback, useMemo } from 'react'

import styles from './index.module.scss'

type Props = {
  width: number
  height: number
  color: string
  speed: number
  amplitude: number
}

export const Wave = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(canvasRef.current)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  const info = useMemo(() => ({ seconds: 0, t: 0 }), [])

  const drawSine = useCallback(
    (t: number, zoom: number, delay: number) => {
      if (!canvas || !context) return

      var xAxis = Math.floor(canvas.height / 2)
      var yAxis = 0

      var x = t
      var y = Math.sin(x) / zoom
      context.moveTo(yAxis, props.amplitude * y + xAxis)

      for (let i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t + (-yAxis + i) / props.amplitude / zoom
        y = Math.sin(x - delay) / 3
        context.lineTo(i, props.amplitude * y + xAxis)
      }
    },
    [props, canvas, context]
  )

  const drawWave = useCallback(
    (color: string, alpha: number, zoom: number, delay: number) => {
      if (!canvas || !context) return

      context.fillStyle = color
      context.globalAlpha = alpha
      context.beginPath()
      drawSine(info.t / 0.5, zoom, delay)
      context.lineTo(canvas.width + 10, canvas.height)
      context.lineTo(0, canvas.height)
      context.closePath()
      context.fill()
    },
    [canvas, context, info, drawSine]
  )

  const draw = useCallback(() => {
    if (!canvas || !context) return

    context.clearRect(0, 0, canvas.width, canvas.height)

    drawWave(props.color, 0.5, 3, 0)
    drawWave(props.color, 0.4, 2, 250)
    drawWave(props.color, 0.2, 1.6, 100)
  }, [props, canvas, context, drawWave])

  const update = useCallback(() => {
    if (!canvas) return

    draw()

    info.seconds = info.seconds + 0.014
    info.t = info.seconds * Math.PI

    setTimeout(update, props.speed)
  }, [props, canvas, info, draw])

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
    if (!context) return
    update()
  }, [update, context])

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>
}
