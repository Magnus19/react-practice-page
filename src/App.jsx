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
	{ label: "Link 1", href: "/test", description: "test 1" },
	{ label: "Link 2", href: "/test2", description: "test 2" },
	{ label: "Link 3", href: "/test3", description: "test 3" },
	{ label: "Link 4", href: "/test4", description: "test 4" },
	{ label: "Link 5", href: "/test5", description: "test 5" },
];

function Body() {
	return (
		<>
			<div id="main">
				<div id="body-header">Directories to each practice sessions</div>
				{links.map((link) => (
					<a className="link-wrap" href={link.label} key={link.href}>
						<div className="link-picture">PLACEHOLDER</div>
						<h1>{link.label}</h1>
						<p>{link.description}</p>
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
