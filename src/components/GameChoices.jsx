import React from 'react'

function GameChoices({ onChoice, disabled, choices }) {
  return (
    <div className="choices">
      {choices.map((choice) => (
        <button
          key={choice}
          onClick={() => onChoice(choice)}
          className="choice-btn"
          disabled={disabled}
        >
          {choice.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
export default GameChoices;
