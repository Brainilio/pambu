import React from "react"
import "../styles/services.css"

const Services = ({ content }) => {
	return (
		<section className="services-section">
			{content.map((c) => (
				<div key={c.title} className="services-cards">
					<h1>{c.title}</h1>
					<p>{c.description}</p>
				</div>
			))}
		</section>
	)
}

export default Services
