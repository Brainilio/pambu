import React from "react"
import Button from "./Button"
import "../styles/twoContent.css"

const TwoContent = ({
	reverse,
	title,
	text,
	image,
	btnBool,
	btnText = "",
	btnLink = "",
}) => {
	return (
		<section className={reverse ? "two reverse" : "two"}>
			<div className="two-text">
				<h2>{title}</h2>
				<p>{text}</p>
				{btnBool ? <Button link={btnLink} text={btnText} /> : null}
			</div>
			<img src={image} alt="group" width="1200px" height="700px" />
		</section>
	)
}

export default TwoContent
