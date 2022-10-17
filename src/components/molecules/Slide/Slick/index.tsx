import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Image } from '../../../../types/Image'
import styles from './index.module.scss'

type SlickArrowProps = {
  className?: string
  style?: Object
  onClick?: () => void
}

export const NextArrow = (props: SlickArrowProps) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', position: 'absolute', right: '8px' }}
      onClick={onClick}
    />
  )
}

export const PrevArrow = (props: SlickArrowProps) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', position: 'absolute', left: '8px', zIndex: 1 }}
      onClick={onClick}
    />
  )
}

type Props = {
  images: Image[]
  customPaging: (i: any) => React.ReactElement
}

export const Slide = ({ images, ...props }: Props) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    ...props,
  }
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {images.map(({ src, alt, width, height }, index) => (
          <div key={index}>
            <img src={src} alt={alt} width={width} height={height} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
