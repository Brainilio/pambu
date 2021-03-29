import React from "react"
import Navbar from "../components/Navbar"
import model from "../images/model.jpg"
import PageHeader from "../components/PageHeader"
import "../styles/globalStyles.css"
import girl1 from "../images/girl1.jpg"
import TwoContent from "../components/TwoContent"
import Services from "../components/Services"
import Title from "../components/Title"
import ContactInformation from "../components/ContactInformation"
import Form from "../components/Form"

const content = [
	{
		title: "Catwalk Training",
		description: "Via deze weg leer je hoe je je moet gedragen op een catwalk.",
	},
	{
		title: "Model Coaching",
		description:
			"Hiermee leer je poseren en omgaan met de lichten zodat er vlot gewerkt kan worden.",
	},
	{
		title: "Model events",
		description:
			"Door andere modellen bezig te zien en evenementen bijwonen, zie je hoe het echt verloopt.",
	},
	{
		title: "Model Shows",
		description: "PAMBU zal ervoor zorgen dat je mag lopen voor amateur shows.",
	},
	{
		title: "Life Coaching",
		description:
			"Via deze weg willen we het maximale uit je krijgen. Omdat we hebben gemerkt dat je persoonlijke leven veel impact kan hebben op alles wat je ooit zou willen bereiken in het leven. In dit geval, muziek.",
	},
	{
		title: "Portfolio",
		description:
			"Met je portfolio kun je jezelf gaan presenteren in een modellenbureau. Dat is jou persoonlijke CV.",
	},
]
const modelling = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<PageHeader text="Modelling" image={model} />
				<TwoContent
					title="Pambu Shoots & Collabs"
					text="PAMBU wilt graag de deuren voor je openen zodat je al een stap dichterbij je modellen droom te laten komen. Via ons bouw je ervaring op en krijg je een portfolio. 

Daarmee kun je je al sneller aanmelden voor verschillende modellenbureau’s. 
Met behulp van een professionele fotograaf ga je te werk en leer je omgaan met de camera.


 "
					image={girl1}
					reverse={false}
				/>
				<Title text="Onze diensten" />
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

export default modelling
