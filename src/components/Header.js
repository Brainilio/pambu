import React from "react"
import Button from "./Button"
import "../styles/header.css"

const Header = () => {
	return (
		<section className="header">
			<div>
				<h1 className="header-title">PAMBU</h1>
				<span className="header-subtitle">
					Pretty amazing yet unique moments.
				</span>
			</div>
			<Button link="#" text="READ MORE" />
		</section>
	)
}

export default Header
