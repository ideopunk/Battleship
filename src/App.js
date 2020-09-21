import React, { Component } from "react";
import Ship from "./Ship";
import Board from "./Board";
import "./App.scss";

class App extends Component {
	initialState = {
		participants: [
			{
				ships: [
					[false, false, false, false, false],
					[false, false, false, false],
					[false, false, false],
					[false, false, false],
					[false, false],
				],
				board: new Array(100).fill("naw"),
			},
			{
				ships: [
					[false, false, false, false, false],
					[false, false, false, false],
					[false, false, false],
					[false, false, false],
					[false, false],
				],
				board: new Array(100).fill("naw"),
			},
		],
	};

	state = {
		participants: [
			{
				ships: [
					[false, false, false, false, false],
					[false, false, false, false],
					[false, false, false],
					[false, false, false],
					[false, false],
				],
				board: new Array(100).fill("naw"),
			},
			{
				ships: [
					[false, false, false, false, false],
					[false, false, false, false],
					[false, false, false],
					[false, false, false],
					[false, false],
				],
				board: new Array(100).fill("naw"),
			},
		],
	};

  onBoardHit = (status, boardIndex, entrantNumber) => {
    const currentState = this.state
    if (status === "naw") {
      currentState.participants[entrantNumber].board[boardIndex] = "miss"
    }

    this.setState(currentState)
    return;
  }

	onShipHit = (status, shipArea, shipNumber, entrantNumber) => {
		entrantNumber = Number(entrantNumber);
		const currentState = this.state;
		currentState.participants[entrantNumber].ships[shipNumber][shipArea] = true;
		this.setState(currentState);
		this.winCheck(entrantNumber);
	};

	winCheck = (entrantNumber) => {
		const entrantShips = this.state.participants[entrantNumber].ships;
		const falseFound = entrantShips.find((ship) =>
			ship.some((part) => part === false)
		);
		if (!falseFound) {
			this.winCelebration(entrantNumber);
		}
	};

	winCelebration = (entrantNumber) => {
		const name = Object.keys(this.state.participants[entrantNumber]);
		alert(`${name} wins!!!`);
		this.setState(this.initialState);
	};

	render() {
		return (
			<div className="App">
				<div className="boards">
					<Board entrantNumber="0" cells={this.state.participants[0].board} onBoardHit={this.onBoardHit}/>
				</div>
				<div className="pieces">
					<Ship
						entrant="0"
						shipNumber="0"
						title="Carrier"
						hits={this.state.participants[0].ships[0]}
						sunk={
							this.state.participants[0].ships[0].some(
								(part) => part === false
							)
								? false
								: true
						}
						onShipHit={this.onShipHit}
					/>
					<Ship
						entrant="0"
						shipNumber="1"
						title="Battleship"
						hits={this.state.participants[0].ships[1]}
						sunk={
							this.state.participants[0].ships[1].some(
								(part) => part === false
							)
								? false
								: true
						}
						onShipHit={this.onShipHit}
					/>
					<Ship
						entrant="0"
						shipNumber="2"
						title="Destroyer"
						hits={this.state.participants[0].ships[2]}
						sunk={
							this.state.participants[0].ships[2].some(
								(part) => part === false
							)
								? false
								: true
						}
						onShipHit={this.onShipHit}
					/>
					<Ship
						entrant="0"
						shipNumber="3"
						title="Submarine"
						hits={this.state.participants[0].ships[3]}
						sunk={
							this.state.participants[0].ships[3].some(
								(part) => part === false
							)
								? false
								: true
						}
						onShipHit={this.onShipHit}
					/>
					<Ship
						entrant="0"
						shipNumber="4"
						title="Patrol"
						hits={this.state.participants[0].ships[4]}
						sunk={
							this.state.participants[0].ships[4].some(
								(part) => part === false
							)
								? false
								: true
						}
						onShipHit={this.onShipHit}
					/>
				</div>
			</div>
		);
	}
}

export default App;
