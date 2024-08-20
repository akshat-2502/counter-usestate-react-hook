import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //let counter = 15
  let [counter, setCounter] = useState(0)

  const addValue = ()=>{
    counter = counter+1
    setCounter(counter)  // or i can also pass (counter+1)
  }

  const removeValue = () => {
    counter = counter-1
    setCounter(counter)
  }

  return (
    <>
      <h1>Counter Program Using Hook</h1>
      <h2>Counter Value :- {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>

    </>
  )
}

export default App
