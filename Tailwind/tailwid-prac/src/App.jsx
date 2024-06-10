import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style= {{display: "flex", justifyContent: "center"}}>
      <div style= {{backgroundColor: "red"}}>hi</div>
      <div style= {{backgroundColor: "blue"}}>hi this</div>
      <div style= {{backgroundColor: "yellowgreen"}}>hi Tavish</div>

    </div>

    <div className='flex justify-between'>
    <div style= {{backgroundColor: "red"}}>hi</div>
      <div style= {{backgroundColor: "blue"}}>hi this</div>
      <div style= {{backgroundColor: "yellowgreen"}}>hi Tavish</div>

      </div>
    </>
  )
}

export default App
