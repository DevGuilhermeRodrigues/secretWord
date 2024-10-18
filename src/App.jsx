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
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {category, word};
  }

  const startGame = () => {
    const { category, word } = pickWordAndCategory()

    let wordLetter = word.split("")
    wordLetter = wordLetter.map((l) => l.toLowerCase());

    // FIll States
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)
     
    console.log(letters)
    console.log(category, word)
    console.log(wordLetter)

    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GamerOver retry={retry} />}
    </div>
  )
}

export default App
