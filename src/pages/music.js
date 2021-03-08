import React from "react"
import Navbar from "../components/Navbar"
import mus from "../images/music.jpg"
import girl1 from "../images/girl1.jpg"
import TwoContent from "../components/TwoContent"
import PageHeader from "../components/PageHeader"
import Title from "../components/Title"
import Services from "../components/Services"
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
		description: "Om het maximale uit je te halen via impact.",
	},
	{
		title: "Portfolio",
		description:
			"Met je portfolio kun je jezelf gaan presenteren in een modellenbureau. Dat is jou persoonlijke CV.",
	},
]
const music = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<PageHeader text="Music" image={mus} />
				<TwoContent
					title="Pambu Music"
					text="
Via PAMBU krijg je de kans om met professionele producers, beatmakers, dj’s en zangers te werken. Samen duiken jullie de studio in en produceren gezamenlijk magie voor de oren. 

Naast de sessies in de studio, word je ook maandelijks begeleid en krijg je eens in de zoveel tijd de kans om een schrijverskamp bij te wonen!

Denk jij dat je dit aankan en er klaar voor bent? Schrijf je dan zo snel mogelijk in.

 "
					image={girl1}
					reverse={false}
				/>
				<Title text="Our artists" />
				<TwoContent
					title="Pambu Music"
					text="
Via PAMBU krijg je de kans om met professionele producers, beatmakers, dj’s en zangers te werken. Samen duiken jullie de studio in en produceren gezamenlijk magie voor de oren. 

Naast de sessies in de studio, word je ook maandelijks begeleid en krijg je eens in de zoveel tijd de kans om een schrijverskamp bij te wonen!

Denk jij dat je dit aankan en er klaar voor bent? Schrijf je dan zo snel mogelijk in.

 "
					image={girl1}
					reverse={false}
				/>
				<TwoContent
					title="Pambu Music"
					text="
Via PAMBU krijg je de kans om met professionele producers, beatmakers, dj’s en zangers te werken. Samen duiken jullie de studio in en produceren gezamenlijk magie voor de oren. 

Naast de sessies in de studio, word je ook maandelijks begeleid en krijg je eens in de zoveel tijd de kans om een schrijverskamp bij te wonen!

Denk jij dat je dit aankan en er klaar voor bent? Schrijf je dan zo snel mogelijk in.

 "
					image={girl1}
					reverse={true}
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

export default music
