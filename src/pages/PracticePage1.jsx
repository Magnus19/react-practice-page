import "./PracticePage1.css";
import { useState } from "react";

// Practice Session 1

function MyButton1() {
	const [count, setCount] = useState(0);

	const click = () => {
		setCount(count + 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<>
			<button onClick={click}>Press this button</button>
			<button onClick={reset}>Reset</button>
			<div id="count-val">Clicked {count} times</div>
		</>
	);
}

// Practice Session 2

function MyButton({ count, click }) {
	return (
		<>
			<button onClick={click}>Press this button</button>
			<div id="count-val">Clicked {count} times</div>
		</>
	);
}

function MyButton2({ count, click }) {
	return (
		<>
			<MyButton count={count} click={click}></MyButton>
			<MyButton count={count} click={click}></MyButton>
		</>
	);
}

// Practice Session 3

function Game() {
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

// Practice Session 4
function ToDoList() {
	const [task, setTask] = useState([]);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const addTask = (event) => {
		event.preventDefault();

		if (!title.trim() || !desc.trim()) return;

		const newTask = {
			id: crypto.randomUUID(),
			title: title.trim(),
			desc: desc.trim(),
		};

		console.log(newTask.id);

		setTask((currentTasks) => [...currentTasks, newTask]);

		setDesc("");
		setTitle("");
	};

	const delTask = (id) => {
		setTask((task) => {
			return task.filter((item) => item.id !== id);
		});
	};

	return (
		<>
			<div id="todo-wrap">
				<form id="todo-header" onSubmit={addTask}>
					<input
						placeholder="Put title here"
						onChange={(event) => setTitle(event.target.value)}
						value={title}
					/>
					<input
						placeholder="Put description here"
						value={desc}
						onChange={(event) => setDesc(event.target.value)}
					/>
					<button id="add-task">Add a Task</button>
				</form>

				<div id="todo-body">
					{task.map((task) => {
						return (
							<div className="task-wrap" key={task.id}>
								<div className="task-title">{task.title}</div>
								<div className="task-desc">{task.desc}</div>
								<button className="del-btn" onClick={() => delTask(task.id)}>
									Delete
								</button>
								<button className="edit-btn">Edit</button>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default function PracticePage1() {
	// For Practice Session #2
	const [count, setCount] = useState(0);

	const click = () => {
		setCount(count + 1);
	};
	//

	return (
		<>
			<div id="main">
				<div id="body-header">useState Practice</div>
				<div id="body-description">
					useState is used when you want information to be "remembered"
				</div>

				{practiceSessions.map((session) => {
					const SessionComponent = components[session.component];

					return (
						<div className="practice-session-wrap" key={session.id}>
							<h1>
								Practice #{session.id}
								<br></br>
								{session.title}
							</h1>
							<h2>{session.description}</h2>
							{SessionComponent && (
								<SessionComponent
									{...(session.usesSharedCount ? { count, click } : {})}
								></SessionComponent>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
}

const practiceSessions = [
	{
		id: "1",
		title: "Button",
		description: "Updating button value.",
		component: "MyButton1",
	},
	{
		id: "2",
		title: "Two Buttons",
		description: "Updating button value in shared components using props.",
		component: "MyButton2",
		usesSharedCount: true,
	},
	{
		id: "3",
		title: "Tic Tac Toe",
		description: "It is tic tac toe, what more?",
		component: "Game",
	},
	{
		id: "4",
		title: "To-Do List",
		description: "Simple CRUD functions.",
		component: "ToDoList",
	},
];

const components = {
	MyButton1,
	MyButton2,
	Game,
	ToDoList,
};
