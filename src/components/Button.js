import { Link } from "gatsby"
import React from "react"
import "../styles/button.css"

const Button = ({ link = "#", text }) => {
	return (
		<Link className="button" to={link}>
			{text}
		</Link>
	)
}

export default Button
