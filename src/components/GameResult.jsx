import React from 'react'

function GameResult({ playerChoice, computerChoice, result }) {
  return (
    <div className="result">
      <p>Your choice: {playerChoice}</p>
      <p>Computer's choice: {computerChoice}</p>
      <h2>{result}</h2>
    </div>
  )
}
export default GameResult;