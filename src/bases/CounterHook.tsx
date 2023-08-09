import { useCounter } from '../hooks/useCounter'

export const CounterHook = () => {
  const { counter, increment, counterElement} = useCounter({
    initialState: undefined
  })

  return (
    <>
      <h1>Counter Hook: </h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={increment}>
        +1
      </button>
    </>
  )
}
