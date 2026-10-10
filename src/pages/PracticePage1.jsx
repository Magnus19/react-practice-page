import "./PracticePage1.css";
import { useState } from "react";

function MyButton({ count, click }) {
	return (
		<>
			<button onClick={click}>Press this button</button>
			<div id="count-val">Clicked {count} times</div>
		</>
	);
}

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

function MyButton2({ count, click }) {
	return (
		<>
			<MyButton count={count} click={click}></MyButton>
			<MyButton count={count} click={click}></MyButton>
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
		description: "Updating button value",
		component: "MyButton1",
	},
	{
		id: "2",
		title: "Two Buttons",
		description: "Updating button value in shared components",
		component: "MyButton2",
		usesSharedCount: true,
	},
];

const components = {
	MyButton1,
	MyButton2,
};
