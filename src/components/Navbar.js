import React, { useState } from "react"
import "../styles/navbar.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navbar = () => {
	const [open, setOpen] = useState(false)

	const hamburgerHandler = () => {
		setOpen((prevstate) => !prevstate)
	}
	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<h2>
						<AniLink duration={1} fade activeStyle={{ color: "grey" }} to="/">
							PAMBU
						</AniLink>

						{/* <Link to="/" activeStyle={{ color: "grey" }}>
							PAMBU
						</Link> */}
					</h2>
				</div>
				<div className="navlinks">
					<ul>
						<li>
							<AniLink
								duration={1}
								fade
								to="/modelling"
								activeStyle={{ color: "grey" }}
							>
								<h5>Modelling</h5>
							</AniLink>
						</li>
						<li>
							<AniLink
								duration={1}
								fade
								to="/dance"
								activeStyle={{ color: "grey" }}
							>
								<h5>Dans</h5>
							</AniLink>
						</li>
						<li>
							<AniLink
								duration={1}
								fade
								to="/music"
								activeStyle={{ color: "grey" }}
							>
								<h5>Music</h5>
							</AniLink>
						</li>
						<li>
							<AniLink
								duration={1}
								fade
								to="/prijzen"
								activeStyle={{ color: "grey" }}
							>
								<h5>Prijzen</h5>
							</AniLink>
						</li>
						<li>
							<AniLink
								duration={1}
								fade
								to="/photos"
								activeStyle={{ color: "grey" }}
							>
								<h5> Gallerij</h5>
							</AniLink>
						</li>
					</ul>
				</div>
				<div
					onClick={() => hamburgerHandler()}
					className="hamburger"
					aria-hidden="true"
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav>
			<div
				aria-hidden="true"
				onClick={() => hamburgerHandler()}
				className={`sidedrawer ${open ? "open" : ""}`}
			>
				{/* <button onClick={() => hamburgerHandler()}>X</button> */}
				<div className="logo">
					<h1>
						<AniLink
							duration={1}
							fade
							onClick={() => hamburgerHandler()}
							to="/"
							activeStyle={{ color: "grey" }}
						>
							PAMBU
						</AniLink>
					</h1>
				</div>
				<div className="navlinks-sidedrawer">
					<ul>
						<li>
							<AniLink
								duration={1}
								fade
								onClick={() => hamburgerHandler()}
								to="/modelling"
								activeStyle={{ color: "grey" }}
							>
								<h5>Modelling</h5>
							</AniLink>
						</li>
						<li>
							<AniLink
								duration={1}
								fade
								onClick={() => hamburgerHandler()}
								to="/dance"
								activeStyle={{ color: "grey" }}
							>
								<h5>Dans</h5>
							</AniLink>
						</li>
						<li>
							<AniLink
								duration={1}
								onClick={() => hamburgerHandler()}
								to="/music"
								activeStyle={{ color: "grey" }}
							>
								<h5>Music</h5>
							</AniLink>
						</li>
						<li>
							<AniLink
								duration={1}
								fade
								onClick={() => hamburgerHandler()}
								to="/prijzen"
								activeStyle={{ color: "grey" }}
							>
								<h5>Prijzen</h5>
							</AniLink>
						</li>
						<li>
							<AniLink
								duration={1}
								fade
								onClick={() => hamburgerHandler()}
								to="/photos"
								activeStyle={{ color: "grey" }}
							>
								<h5> Gallerij</h5>
							</AniLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Navbar
