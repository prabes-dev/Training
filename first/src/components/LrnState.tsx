import  { useState } from 'react'

const LrnState = () => {
    const [count, setCount] = useState(0)
    const [by, setBy] = useState(1)
    const handleIncrement = () => {
        setCount(count + by)
    }
    const handleReset = () => {
        setCount(0)
    }
    const handleDecerement = () => {
        setCount(count - by)
    }
    const handleInc = () => {
        setBy(by + 1)
    }
    const handlDec = () => {
        setBy(by - 1)
    }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleDecerement}>decrement</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrement}>increment</button>
        <br />
        <p>we are increasing count by :{by}</p>
        <button onClick={handlDec}>decrese decrement</button>
        <button onClick={handleInc}>increse increment</button>

    </div>
  )
}

export default LrnState