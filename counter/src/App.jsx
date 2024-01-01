import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [counter, setCounter] = useState(0);

    const addValue = () => {
        console.log("value added", counter);
        counter<20 ? setCounter(counter+1) : setCounter(20);
    }

    const removeValue = () => {
        counter>0 ? setCounter(counter-1): setCounter(0);
    }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2> Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
