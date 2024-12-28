import React from 'react'

let username = "Mansi";
const age = 22;
const num1 = 12;
const num2 = 10;

const JavaScriptXML = () => {
  return (
    <div>
      <h1 className='welcome'>"Welcome to JSX"</h1>
      <h3 className='name'>Hello, {username}!</h3>
      <h3 className='name'>You are {age} years old.</h3>
      <h3 className='name'>The sum of {num1} and {num2} is {num1 + num2}.</h3>
    </div>
  )
}

export default JavaScriptXML
