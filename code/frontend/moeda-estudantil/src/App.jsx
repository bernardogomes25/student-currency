import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-purple-600 to-green-600">
      <h1 className="text-6xl font-bold text-white">BrainCoin</h1>
      <p className="text-lg text-white font-light">Sistema de moeda estudantil</p>
    </div>  
  )
}

export default App
