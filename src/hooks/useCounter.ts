import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10

export const useCounter = ({ initialState = 5 }) => {
  const [counter, setCounter] = useState(initialState)

  const counterElement = useRef<HTMLHeadingElement>(null)

  const tl = useRef(gsap.timeline())

  const handleClick = () => {
    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT))
  }

  useLayoutEffect(() => {
    if (!counterElement.current) return;

    tl.current
      .to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause();
  }, [])

  useEffect(() => {
    tl.current.play(0)

    if (counter < MAXIMUN_COUNT) return;

    console.log('%cSe llegó al valor máximo', 'color: red; background-color: black;')
  }, [counter])

  return { counter, counterElement, increment: handleClick }
}