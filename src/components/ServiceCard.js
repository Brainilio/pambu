import React from "react"
import Button from "./Button"
import "../styles/serviceCard.css"

const ServiceCard = ({ image, title, description }) => {
	return (
		<div className="service-card">
			<div className="service-text">
				<h1>{title}</h1>
				<span>{description}</span>
			</div>
			<Button text="Lees meer" />
			<img class="service-image" alt="help" src={image} />
		</div>
	)
}

export default ServiceCard
