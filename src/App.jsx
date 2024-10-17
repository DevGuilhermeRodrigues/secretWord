// States 
import { useState } from 'react'

// Data
import {wordsList} from './data/words'

// Components
import StartScreen from './components/StartScreen/StartScreen'
import Game from './components/Game/Game'
import GamerOver from './components/GameOver/GamerOver'

// CSS
import './style.css' 

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState({wordsList})

  console.log(words)

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GamerOver />}
    </div>
  )
}

export default App
