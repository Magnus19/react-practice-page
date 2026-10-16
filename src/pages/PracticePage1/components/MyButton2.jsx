import { useState } from "react";

// Practice Session 2
function MyButton({ count, click }) {
	return (
		<>
			<button onClick={click}>Press this button</button>
			<div id="count-val">Clicked {count} times</div>
		</>
	);
}

function TwoMyButtons({ count, click }) {
	return (
		<>
			<MyButton count={count} click={click}></MyButton>
			<MyButton count={count} click={click}></MyButton>
		</>
	);
}

export default function MyButton2() {
	const [count, setCount] = useState(0);

	const click = () => {
		setCount(count + 1);
	};

	return (
		<>
			<div className="practice-session-wrap">
				<h1>
					Practice #2
					<br />
					Two Buttons
				</h1>
				<div className="practice-feat-wrap">
					<TwoMyButtons count={count} click={click}></TwoMyButtons>
				</div>
			</div>
		</>
	);
}
