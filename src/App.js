import React from 'react'

import boardData from './data/bingo_item_data'

import './App.css'

import GameBoard from './Components/GameBoard/GameBoard'

let setupBoard = []

function in_array(array, el) {
  for (var i = 0; i < array.length; i++) if (array[i] === el) return true
  return false
}

function get_rand(array) {
  var randomItem = boardData[Math.floor(Math.random() * boardData.length)]
  if (!in_array(setupBoard, randomItem)) {
    setupBoard.push(randomItem)
    return randomItem
  }
  return get_rand(array)
}

for (let i = 0; i < 24; i++) {
  get_rand(boardData)
}

function App() {
  return (
    <div className="App">
      <h1>Scammer Bingo v1</h1>
      <GameBoard setupBoard={setupBoard} />
    </div>
  )
}

export default App
