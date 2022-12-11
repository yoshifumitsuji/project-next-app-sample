import gsap from 'gsap'
import { Transition, TransitionGroup } from 'react-transition-group'

import styles from './index.module.scss'

type Props = {
  in: boolean
  duration: number
  children: string
}

export const FallInText = (props: Props) => {
  return (
    <div className={styles.line}>
      <TransitionGroup enter exit>
        {props.in &&
          props.children.split('').map((char, index) => (
            <Transition
              key={`${char}-${index}`}
              in={props.in}
              timeout={props.duration}
              mountOnEnter={true}
              unmountOnExit={true}
              onEnter={(n: any) => {
                gsap.set(n, { opacity: 0, y: -10 })
              }}
              onEntering={(n: any, done: any) => {
                gsap.to(n, { opacity: 1, y: 0, done })
              }}
              onExit={(n: any) => {
                gsap.set(n, { opacity: 1, y: 0 })
              }}
              onExiting={(n: any) => {
                gsap.to(n, { opacity: 0, y: -10 })
              }}
            >
              <span className={styles.char}>{char}</span>
            </Transition>
          ))}
      </TransitionGroup>
    </div>
  )
}
