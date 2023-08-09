import { useReducer } from 'react'
import { counterReducer, INITIAL_STATE } from './reducer/counter';
import * as CounterActions from './actions/actions';

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => dispatch(CounterActions.doReset())

  const handleIncreaseBy = (value: number) => dispatch(CounterActions.doIncreaseBy(value))

  return (
    <>
      <h1>Counter Reducer Segmentado: {counterState.counter}</h1>
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
