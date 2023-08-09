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
  // console.log(state)
  switch (action.type) {
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
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
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  const handleIncreaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } })
  }

  return (
    <>
      <h1>Counter Reducer: {counterState.counter}</h1>
      <pre>
        {JSON.stringify(counterState, null, 2)}
      </pre>
      <button onClick={handleReset}>
        Reset
      </button>
      <button onClick={() => handleIncreaseBy(1)}>
        +1
      </button>
      <button onClick={() => handleIncreaseBy(5)}>
        +5
      </button>
      <button onClick={() => handleIncreaseBy(10)}>
        +10
      </button>
    </>
  )
}
