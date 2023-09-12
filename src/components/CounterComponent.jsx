import { useCounter } from "../hooks/useCounter"

export const CounterComponent = () => {

  const {counter, deleteCounter, resetCounter, addCounter} = useCounter(0)

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button className="btn btn-primary" onClick={ () => deleteCounter()}>-1</button>
      <button className="btn btn-danger" onClick={ () => resetCounter()}>Reset</button>
      <button className="btn btn-primary" onClick={ () => addCounter()}>+1</button>
    </>
  )
}
