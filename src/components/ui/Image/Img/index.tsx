import { useEffect, useMemo, useState } from 'react'

type Props = {
  src: string
  alt?: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
}

const loadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src

    image.onload = () => {
      resolve(image)
    }

    image.onerror = (error) => {
      reject(error)
    }
  })
}

export const Img = (props: Props) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const alt = useMemo(() => props.alt || props.src?.split('/')?.pop() || 'No Image', [props])

  useEffect(() => {
    loadImage(props.src).then((result: any) => {
      setWidth(result.width)
      setHeight(result.height)
    })
  }, [props])

  return <img src={props.src} alt={alt} width={width} height={height} loading={props.loading} />
}
