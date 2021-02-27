import React, { useState } from "react"
import "../styles/navbar.css"

const Navbar = () => {
	const [open, setOpen] = useState(false)

	const hamburgerHandler = () => {
		setOpen((prevstate) => !prevstate)
	}
	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<h3>PAMBU</h3>
				</div>
				<div className="navlinks">
					<ul>
						<li>Modelling</li>
						<li>Dans</li>
						<li>Music</li>
						<li>Contacteer ons</li>
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
					<h1>PAMBU</h1>
				</div>
				<div className="navlinks-sidedrawer">
					<ul>
						<li>Modelling</li>
						<li>Dans</li>
						<li>Music</li>
						<li>Contacteer ons</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Navbar
