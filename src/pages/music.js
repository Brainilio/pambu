import React from "react"
import Navbar from "../components/Navbar"
import mus from "../images/music.jpg"
import girl1 from "../images/girl1.jpg"
import andy from "../images/andyprod.jpeg"
import ango from "../images/ango.jpeg"
import TwoContent from "../components/TwoContent"
import PageHeader from "../components/PageHeader"
import Title from "../components/Title"
import Services from "../components/Services"
import ContactInformation from "../components/ContactInformation"
import Form from "../components/Form"

const content = [
	{
		title: "Zangles",
		description:
			"Met deze les willen we ervoor zorgen dat je onbewust gaat weten hoe je je stem kunt gebruiken en hoelang.",
	},
	{
		title: "Muziek Coaching",
		description:
			"Hiermee willen we dat je je verdiept in muziek. Je moet muziek niet alleen maken maar het ook dragen.",
	},
	{
		title: "Studiosessie",
		description:
			"Je krijgt de kans om je liedjes op te nemen en eventueel uit te brengen.",
	},
	{
		title: "Schrijvers Tips & Tricks",
		description:
			"We willen je genoeg tips meegeven over hoe je het beste kunt schrijven door een bepaald tactiek. Hierdoor ga je makkelijker kunnen schrijven!",
	},
	{
		title: "Life Coaching",
		description:
			"Via deze weg willen we het maximale uit je krijgen. Omdat we hebben gemerkt dat je persoonlijke leven veel impact kan hebben op alles wat je ooit zou willen bereiken in het leven. In dit geval, muziek.",
	},
	{
		title: "Schrijverskamp",
		description:
			"Om de zoveel tijd ga je met een groep ongeveer een weekje weg om alles te leren over muziek! Ook worden er dan liedjes opgenomen.",
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
					title="AngoSoundz || Producer & DJ"
					text="
AngoSoundz is een van de beste producers uit Nederland. Hij heeft een unieke Afro sound waardoor zijn beats zeker herkenbaar zijn. Op een jonge leeftijd wist hij al dat muziek zijn passie was maar deed er niet direct wat mee. Nadat hij besefte dat muziek het enige is waar hij zichzelf helemaal in kon uiten, is hij geen seconde later eraan begonnen.

In een korte tijd is AngoSoundz enorm naar boven gestegen en heeft dus met grote artiesten mogen samenwerken waaronder Broederliefde. Naast het produceren, staat AngoSoundz elk weekend wel te draaien op een feestje. Zijn style van muziek is zeer geliefd en dat zal vast de reden zijn waarom hij zo vaak geboekt wordt. 

Niet is AngoSoundz alleen een talentvolle jonge heer maar ook een man met een groot hart. Heel gauw geeft hij mensen de kans om met hem samen te werken en stopt 100% energie in men om het maximale uit hen te krijgen! 

Moest je willen werken met een man waar je je lekker bij kunt voelen en ook nog hard kunt werken, ben je bij AngoSoundz op het juiste adres.
 "
					image={ango}
					reverse={false}
				/>
				<TwoContent
					title="Andy Kisema || Producer & Beatmaker"
					text="Andy is een duizendpoot. Niet is hij alleen producer en een beatmaker, hij speelt zelf ook nog verschillende instrumenten. 

Zijn liefde voor muziek werd gestimuleerd in zijn kerk. Elke week een repetitie en dan op zondagen zijn talent delen is wat hem vulde. Andy begon al op een jonge leeftijd op zichzelf van alles te proberen met beats. Toen hij het onder de knie kreeg en er helemaal klaar voor was, is hij met zijn vrienden een studio gaan oprichten. 

Ook heeft hij een muziek groep genaamd ''Mama Na Fanta''. Deze groep bestaat uit een aantal jongens die zingen en instrumenten bespelen. 

Met Andy spring je sowieso met plezier de studio in omdat hij graag één wordt met de gene waar hij mee werkt. Hij denkt out of the box en is graag voorbereid. Wat hem zo speciaal maakt is dat hij 100% zijn best doet om op één lijn te zijn met zijn klant zodat ze samen kunst kunnen maken. 

Je zult ervan schrikken hoe rechtvaardig hij is maar je ondertussen nog veel kan laten lachen. Niet om de lolbroek uit te hangen, maar om jou je op je gemakt te laten voelen!



 "
					image={andy}
					reverse={true}
				/>
				<Services content={content} />
				<section className="contact-section">
					<ContactInformation />
					<Form />
				</section>
				<footer>
					© 2021 Pambu | All Rights Reserved | Made with{" "}
					<span role="img" aria-label="">
						🖤
					</span>{" "}
					by{" "}
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
