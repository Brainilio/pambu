import React from "react"
import ContactInformation from "../components/ContactInformation"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import Services from "../components/Services"
import Title from "../components/Title"
import TwoContent from "../components/TwoContent"
import d from "../images/dance.jpg"
import girl1 from "../images/girl1.jpg"

const content = [
	{
		title: "Dansles",
		description: "Via deze weg leer je hoe je je moet gedragen op een catwalk.",
	},
	{
		title: "Dans coach",
		description:
			"Hiermee leer je poseren en omgaan met de lichten zodat er vlot gewerkt kan worden.",
	},
	{
		title: "Dans uitstapjes",
		description:
			"Door andere modellen bezig te zien en evenementen bijwonen, zie je hoe het echt verloopt.",
	},
	{
		title: "Dans Shows",
		description: "PAMBU zal ervoor zorgen dat je mag lopen voor amateur shows.",
	},
	{
		title: "Life Coaching",
		description: "Om het maximale uit je te halen via impact.",
	},
	{
		title: "Conditie Training",
		description:
			"Met je portfolio kun je jezelf gaan presenteren in een modellenbureau. Dat is jou persoonlijke CV.",
	},
]
const dance = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<PageHeader text="Dance" image={d} />
				<TwoContent
					title="Pambu Dance"
					text="

Samen met een coach heb je om de twee weken danslessen. Je krijgt veel begeleiding, tips & minstens 1 keer per week een dansvideo. 
Daarnaast zul je mee dansen op de PAMBU dans evenementen die zich om de 3 maanden plaatsvinden.

 "
					image={girl1}
					reverse={false}
				/>
				<Title text="Our dancer" />
				<TwoContent
					title="Pambu Dance"
					text="

Samen met een coach heb je om de twee weken danslessen. Je krijgt veel begeleiding, tips & minstens 1 keer per week een dansvideo. 
Daarnaast zul je mee dansen op de PAMBU dans evenementen die zich om de 3 maanden plaatsvinden.

 "
					image={girl1}
					reverse={false}
				/>
				<Services content={content} />
				<section className="contact-section">
					<ContactInformation />
					<Form />
				</section>
				<footer>
					© 2021 Pambu | All Rights Reserved | Made with <span>🖤</span> by{" "}
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://bayvinemedia.com"
					>
						{" "}
						Bay Vine Media{" "}
					</a>
				</footer>
			</main>
		</>
	)
}

export default dance
