import "./PracticePage1.css";
import MyButton1 from "./components/MyButton1.jsx";
import MyButton2 from "./components/MyButton2.jsx";
import Game from "./components/Game.jsx";
import ToDoList from "./components/ToDoList.jsx";
import { useState } from "react";

export default function PracticePage1() {
	return (
		<>
			<div id="main">
				<div id="body-header">useState Practice</div>
				<div id="body-description">
					useState is used when you want information to be "remembered"
				</div>

				<MyButton1></MyButton1>
				<MyButton2></MyButton2>
				<Game></Game>
				<ToDoList></ToDoList>
			</div>
		</>
	);
}
