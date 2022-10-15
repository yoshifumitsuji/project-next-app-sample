import React, { RefObject, useCallback, useEffect, useRef } from 'react'

type Rect = Omit<DOMRect, 'toJSON'>

const defaultClientRect: Rect = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: 0,
  height: 0,
}

export const useClientRect = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)

  const getClientRect = useCallback(() => {
    return ref.current?.getBoundingClientRect() ?? defaultClientRect
  }, [ref])

  return {
    ref,
    getClientRect,
  }
}

export const useClientRectArray = <T extends HTMLElement>(length: number) => {
  const refs = useRef<RefObject<T>[]>([])

  useEffect(() => {
    new Array(length).fill(null).map((_, index) => {
      refs.current[index] = React.createRef<T>()
    })
  }, [length])

  return {
    refs,
  }
}
