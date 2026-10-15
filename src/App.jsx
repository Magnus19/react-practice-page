import { Link, Route, Routes } from "react-router-dom";
import { links } from "./data/link.js";
import PracticePage1 from "./pages/PracticePage1/PracticePage1.jsx";

function Header() {
	return (
		<>
			<div id="header">
				<Link to="/">
					<div id="header-icon">Press to go back to home page</div>
				</Link>
				<div id="title">React Practice</div>
			</div>
		</>
	);
}

function Body() {
	return (
		<>
			<div id="main">
				<div id="body-header">Directories to each practice sessions</div>
				{links.map((link) => (
					<Link key={link.id} className="link-wrap" to={`/practice/${link.id}`}>
						<div className="link-picture">PLACEHOLDER</div>
						<h1>{link.label}</h1>
						<p>{link.description}</p>
					</Link>
				))}
			</div>
		</>
	);
}

export default function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Body />}></Route>
				<Route path="/practice/:id" element={<PracticePage1 />}></Route>
			</Routes>
		</>
	);
}
