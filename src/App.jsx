function Header() {
	return (
		<>
			<div id="header">
				<div id="header-icon">PLACEHOLDER</div>
				<div id="title">React Practice</div>
			</div>
		</>
	);
}

const links = [
	{ label: "Link 1", href: "/test" },
	{ label: "Link 2", href: "/test2" },
];

function Body() {
	return (
		<>
			<div id="main">
				<div id="body-header">Directories to each practice sessions</div>
				{links.map((link) => (
					<a className="link-wrap" href={link.label} key={link.href}>
						<p>{link.label}</p>
					</a>
				))}
			</div>
		</>
	);
}

export default function App() {
	return (
		<>
			<Header></Header>
			<Body></Body>
		</>
	);
}
