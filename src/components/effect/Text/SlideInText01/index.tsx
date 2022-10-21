import { SlideInProps, SlideIn } from '../../Slide/SlideIn01'

type Props = {
  children: string
} & SlideInProps

export const SlideInText01 = ({
  color = '#fff',
  backgroundColor = '#000',
  slideInDuration = 0.3,
  slideInEase = 'power1.inOut',
  slideInDelay = 0,
  slideOutDuration = 0.3,
  slideOutEase = 'power1.inOut',
  slideOutDelay = 0,
  scrollTrigger = null,
  ...props
}: Props) => {
  return <SlideIn>{props.children}</SlideIn>
}
