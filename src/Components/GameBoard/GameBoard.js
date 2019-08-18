import React, { Component } from 'react'

export default class GameBoard extends Component {
  // Get random sample of 25 objects

  // Map over those objects and fill the grid

  // When clicked add "Daub" image

  handleClick() {
    alert()
  }

  render(props) {
    const { setupBoard } = this.props

    const descriptions = setupBoard.map(item => {
      return (
        <button
          className={item.square}
          key={item.id}
          onClick={this.handleClick}
        >
          {item.description}
        </button>
      )
    })

    console.log(setupBoard)

    return (
      <>
        <div className="CardContainer">
          {descriptions}
          <button className="N3" onClick={this.handleClick}>
            FREE
          </button>
        </div>
      </>
    )
  }
}
