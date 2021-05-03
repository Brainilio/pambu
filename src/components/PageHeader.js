import React from "react"
import "../styles/pageHeader.css"

const PageHeader = ({ image, text }) => {
	return (
		<div className="page-header">
			<h2 className="page-header-title">{text}</h2>
			<img
				className="page-header-image"
				src={image}
				alt="background of header"
			/>
		</div>
	)
}

export default PageHeader
