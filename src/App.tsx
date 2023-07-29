import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'

const App = () => {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy />
    </>
  )
}

export default App
