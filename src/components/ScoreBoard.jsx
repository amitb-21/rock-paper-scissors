import React from 'react'

function ScoreBoard({ score, matchWinner }) {
  return (
    <div className="score-board">
      <div className="score">
        <h2>You: {score.player}</h2>
        <h2>Computer: {score.computer}</h2>
      </div>
      {matchWinner && (
        <h1 className="winner-message">
          {matchWinner === 'player' ? 'You won the match!' : 'Computer won the match!'}
        </h1>
      )}
    </div>
  )
}
export default ScoreBoard;