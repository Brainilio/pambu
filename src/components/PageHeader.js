import React from "react"
import "../styles/pageHeader.css"

const PageHeader = ({ image, text }) => {
	return (
		<div className="page-header">
			<h1 className="page-header-title">{text}</h1>
			<img
				className="page-header-image"
				src={image}
				alt="background of header"
			/>
		</div>
	)
}

export default PageHeader
