import React from "react"
import ContactInformation from "../components/ContactInformation"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import Services from "../components/Services"
import Title from "../components/Title"
import TwoContent from "../components/TwoContent"
import d from "../images/dance.jpg"
import Evans from "../images/Evans.jpg"
import girl1 from "../images/girl1.jpg"

const content = [
	{
		title: "Dansles",
		description:
			"Doormiddel van onze lessen leer je meer over je eigen lichaam en zul je meer durven en kunnen! Zo krijgt de kans om meer creatief te worden.",
	},
	{
		title: "Dans coach",
		description:
			"Door gecoacht te worden ga je zien waar je nog aan moet werken. Je krijgt van je danscoach om de zoveel tijd individueel een evaluatie.",
	},
	{
		title: "Dans uitstapjes",
		description:
			"Met PAMBU zul je in groep naar dansevenementen gaan. Hiermee willen we dat je beeld over dans veel groter wordt en dus enorm veel leert van andere dansers.",
	},
	{
		title: "Dans Shows",
		description:
			"PAMBU organiseert bepaalde evenementen waar jij je talent eindelijk aan de wereld mag tonen",
	},
	{
		title: "Life Coaching",
		description:
			"ia deze weg willen we het maximale uit je krijgen. Omdat we hebben gemerkt dat je persoonlijke leven veel impact kan hebben op alles wat je ooit zou willen bereiken in het leven. In dit geval, muziek.",
	},
	{
		title: "Conditie Training",
		description:
			"Zonder een gezonde conditie zul je het moeilijk hebben met bijvoorbeeld optredens. We willen voornamelijk zien dat je van de eerste seconde tot de laatste seconde je ademhaling onder controle hebt.",
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
					title="Evans Kingsley | Dance Manager & Dance Coach"
					text="Evans K. is een professionele danser uit Antwerpen. Het feit dat hij in Antwerpen woont, heeft hem niet tegen gehouden om zijn Afrikaanse roots lekker mee te nemen en te delen met België. Wat Evans K. zo uniek maakt is dat hij op een leuke, grappige en creatieve manier een boodschap overbrengt. Zelf is hij van Ghanese afkomst maar je vind snel verschillende Afrikaanse moves terug in zijn dans. Hij is een danser die alle dans-styles bij elkaar brengt en er een kunstwerk van maakt. 

Hij danst niet omdat hij het kan, Evans is dans. Daarnaast is hij zeer creatief en komt jaarlijks met zelf verzonnen danspasjes die natuurlijk vervolgens over de hele wereld worden gebruikt in choreo's. 

Evans K. zijn dans-style vinden we niet alleen interessant in België. Zo heeft hij daarom ook tig fans over heel Europa, Africa, America enzovoorts. Ook is hij afgelopen jaar begonnen met zijn eigen muziek waar je uiteraard leuk op kunt dansen. 

Deze jonge man is zeker een zak vol talent!

 "
					image={Evans}
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
