import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12}
  return <h3>I am a {person.name} with age: {age + money}</h3>
}

function Student(){
  return (
  <div>
    <h3>This is a Student</h3>
    <p>Name:</p>
    <p>Age:</p>
  </div>
  )
}

export default App
