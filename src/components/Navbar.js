import React, { useState } from "react"
import "../styles/navbar.css"
import { Link } from "gatsby"

const Navbar = () => {
	const [open, setOpen] = useState(false)

	const hamburgerHandler = () => {
		setOpen((prevstate) => !prevstate)
	}
	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<h3>
						<Link to="/" activeStyle={{ color: "grey" }}>
							PAMBU
						</Link>
					</h3>
				</div>
				<div className="navlinks">
					<ul>
						<li>
							<Link to="/modelling" activeStyle={{ color: "grey" }}>
								Modelling
							</Link>
						</li>
						<li>
							<Link to="/dance" activeStyle={{ color: "grey" }}>
								Dans
							</Link>
						</li>
						<li>
							<Link to="/music" activeStyle={{ color: "grey" }}>
								Music
							</Link>
						</li>
					</ul>
				</div>
				<div onClick={() => hamburgerHandler()} className="hamburger">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav>
			<div className={`sidedrawer ${open ? "open" : ""}`}>
				<button onClick={() => hamburgerHandler()}>X</button>
				<div className="logo">
					<h1>
						<Link to="/" activeStyle={{ color: "grey" }}>
							PAMBU
						</Link>
					</h1>
				</div>
				<div className="navlinks-sidedrawer">
					<ul>
						<li>
							<Link to="/modelling" activeStyle={{ color: "grey" }}>
								Modelling
							</Link>
						</li>
						<li>
							<Link to="/dance" activeStyle={{ color: "grey" }}>
								Dans
							</Link>
						</li>
						<li>
							<Link to="/music" activeStyle={{ color: "grey" }}>
								Music
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Navbar
