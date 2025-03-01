import React from 'react'
import { addCounter, minusCounter } from './redux/CounterAction'
import { useDispatch, useSelector } from 'react-redux'
import './CounterComponent.css'

const CounterComponent = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()  

    const minusData = ()=>{
        dispatch(minusCounter())
    }
  return (
    <div>
        <h1 className='head'>Redux Example</h1>
        <h2 className='count'>Count is -- {count}</h2>
        <button className='button' onClick={()=>dispatch(addCounter())}>Add</button><br /><br />
        <button className='button' onClick={minusData}>Minus</button>
    </div>
  )
}

export default CounterComponent
