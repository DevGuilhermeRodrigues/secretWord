import React from 'react'

export default function GamerOver({retry}) {
  return (
    <div>
      <h1>Gamer Over</h1>
      <button onClick={retry}>Iniciar jogo</button>
    </div>
  )
}
