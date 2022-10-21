import { SlideIn, SlideInProps } from '../../Slide/SlideIn02'

type Props = {
  children: string
} & SlideInProps

export const SlideInText02 = ({ duration = 0.8, ease = 'none', delay = 0, scrollTrigger = null, ...props }: Props) => {
  return <SlideIn>{props.children}</SlideIn>
}
