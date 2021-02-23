import React from "react"

const Title = ({ text, subtitle = "" }) => {
	return (
		<>
			<h1 className="title">{text}</h1>
			<h2 className="subtitle">{subtitle}</h2>
		</>
	)
}

export default Title
