import { useState } from 'react'

import './App.css'
import Scoreboard from './Scoreboard'
import Inputs from './Inputs'

function App() {

  const [name, setName] = useState({
    double1: {
      player1: '',
      player2: ''
    },
    double2: {
      player1: '',
      player2: ''
    }
  })

  function handleSubmit() {

  }

  return (
    <div>
      <h1>Placar</h1>
      <Inputs {...name} />
      <button onClick={handleSubmit}>Enviar</button>
      <Scoreboard {...name} />
    </div >
  )
}

export default App
