import React, { useState } from 'react'

const FunctionalComponentuseState = () => {
    const [count, setCount] = useState(0)
    const increment = ()=> setCount(count + 1);
    const decrement = ()=> setCount(count - 1);
  return (
    <div>
    <h1 className='head'>Counter: {count}</h1>
    <button onClick={increment} className='button'>Increment</button><br />
    <button onClick={decrement} className='button'>Decrement</button>
    </div>
  )
}

export default FunctionalComponentuseState
