import React from "react"
import "../styles/button.css"

const Button = ({ link = "#", text }) => {
	return (
		<a className="button" href={link}>
			{text}
		</a>
	)
}

export default Button
