import React from 'react'

const Greeting = (props) => {
    return (
        <div>
            <h1 className='welcome'>Hello, {props.name}</h1>
            <h2 className='name'>Your age is {props.age}</h2>
        </div>
    )
}

export default Greeting
