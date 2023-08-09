import { useReducer } from 'react'

interface CounterState {
  counter: number,
  previous: number,
  changes: number
}

type CounterAction =
  | { type: 'increaseBy', payload: { value: number } }
  | { type: 'reset' };

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

// Ejemplo de función pura
// (Solo depende de sus props y el resultado es siempre el mismo con las mismas props)
// const sumar = (a: number, b: number) => a + b;

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increaseBy':
      return {
        counter: state.counter + 1,
        previous: state.counter,
        changes: state.changes + 1
      }
    case 'reset':
      return INITIAL_STATE
    default:
      return state
  }
}

export const CounterReducerComponent = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleClick = () => {
    dispatch({ type: 'increaseBy', payload: { value: 1 } })
  }

  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}
