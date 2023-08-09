import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'
// import { CounterReducerComponent } from './bases/CounterReducer'
import { CounterReducerComponent } from './counter-reducer/CounterReducer';

const App = () => {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  )
}

export default App
