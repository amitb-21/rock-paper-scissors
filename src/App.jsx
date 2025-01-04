import { useState } from 'react'
import ScoreBoard from './components/ScoreBoard'
import GameChoices from './components/GameChoices'
import GameResult from './components/GameResult'
import './App.css'

const choices = ['rock', 'paper', 'scissors']
const WINNING_SCORE = 3

function App() {
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState('')
  const [score, setScore] = useState({ player: 0, computer: 0 })
  const [matchWinner, setMatchWinner] = useState(null)

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
  }

  const determineWinner = (player, computer) => {
    if (player === computer) return 'Draw!'
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'You win!'
    }
    return 'Computer wins!'
  }

  const handleChoice = (choice) => {
    if (matchWinner) return

    const computer = getComputerChoice()
    setPlayerChoice(choice)
    setComputerChoice(computer)
    
    const gameResult = determineWinner(choice, computer)
    setResult(gameResult)

    if (gameResult === 'You win!') {
      const newPlayerScore = score.player + 1
      setScore(prev => ({ ...prev, player: newPlayerScore }))
      if (newPlayerScore >= WINNING_SCORE) {
        setMatchWinner('player')
      }
    } else if (gameResult === 'Computer wins!') {
      const newComputerScore = score.computer + 1
      setScore(prev => ({ ...prev, computer: newComputerScore }))
      if (newComputerScore >= WINNING_SCORE) {
        setMatchWinner('computer')
      }
    }
  }

  const resetGame = () => {
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult('')
    setScore({ player: 0, computer: 0 })
    setMatchWinner(null)
  }

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      
      <ScoreBoard score={score} matchWinner={matchWinner} />

      <GameChoices 
        choices={choices} 
        onChoice={handleChoice} 
        disabled={!!matchWinner} 
      />

      {playerChoice && computerChoice && (
        <GameResult 
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
        />
      )}

      <button onClick={resetGame} className="reset-btn">
        {matchWinner ? 'New Game' : 'Reset Game'}
      </button>
    </div>
  )
}

export default App