import { useState } from "react";
import "../PracticePage1.css";

// Practice Session 3
export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 == 0;
	const currentSquares = history[currentMove];

	const handlePlay = (nextSquares) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const jumpTo = (nextMove) => {
		setCurrentMove(nextMove);
	};

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = "Go to Move #" + move;
		} else {
			description = "Go to game start";
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<>
			<div className="practice-session-wrap">
				<h1>
					Practice #3
					<br />
					Tic Tac Toe
				</h1>
				<div className="practice-feat-wrap">
					<div className="game">
						<div className="game-board">
							<TicTacToe
								xIsNext={xIsNext}
								grid={currentSquares}
								onPlay={handlePlay}
							/>

							<div className="game-info">
								<ol>{moves}</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function Grid({ grid, clickGrid }) {
	return (
		<>
			{grid.map((value, index) => {
				return (
					<div className="grid" key={index} onClick={() => clickGrid(index)}>
						<div className="grid-text">{value}</div>
					</div>
				);
			})}
		</>
	);
}

function TicTacToe({ xIsNext, grid, onPlay }) {
	const calculateWinner = (squares) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	};

	const winner = calculateWinner(grid);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next Player: " + (xIsNext ? "X" : "O");
	}

	const clickGrid = (index) => {
		if (grid[index] || calculateWinner(grid)) return;
		const nextSquares = grid.slice();
		nextSquares[index] = xIsNext ? "X" : "O";
		onPlay(nextSquares);
	};

	return (
		<div id="board">
			<div id="status">{status}</div>
			<Grid grid={grid} clickGrid={clickGrid}></Grid>
		</div>
	);
}
