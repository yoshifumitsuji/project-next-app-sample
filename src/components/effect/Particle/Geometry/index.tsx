import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import type { Container, Engine } from 'tsparticles-engine'

type Props = {
  id?: string
  width?: number
  height?: number
  autoPlay?: boolean
  fpsLimit?: number
  backGroundColor?: string
  onClickEnable?: boolean
  onClickMode?: ClickMode
  onHoverEnable?: boolean
  onHoverMode?: HoverMode
  onDiveEnable?: boolean
  onDiveMode?: DivMode
  onResizeEnable?: boolean
  speed?: number
}

export const enum ClickMode {
  attract = 'attract',
  bubble = 'bubble',
  push = 'push',
  remove = 'remove',
  repulse = 'repulse',
  pause = 'pause',
  trail = 'trail',
}

export const enum HoverMode {
  attract = 'attract',
  bounce = 'bounce',
  bubble = 'bubble',
  connect = 'connect',
  grab = 'grab',
  light = 'light',
  repulse = 'repulse',
  slow = 'slow',
  trail = 'trail',
}

export const enum DivMode {
  bounce = 'bounce',
  bubble = 'bubble',
  repulse = 'repulse',
}

export const Geometry = (props: Props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id={props.id ?? 'particle'}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: props.autoPlay,
        fpsLimit: props.fpsLimit,
        background: {
          color: {
            value: props.backGroundColor ?? '#000',
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: props.onClickEnable,
              mode: props.onClickMode,
            },
            onHover: {
              enable: props.onHoverEnable,
              mode: props.onHoverMode,
            },
            onDiv: {
              enable: props.onDiveEnable,
              mode: props.onDiveMode,
            },
            resize: props.onResizeEnable,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: props.speed,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
