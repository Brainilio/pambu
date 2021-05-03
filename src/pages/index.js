import * as React from "react"
import Header from "../components/Header"
import Title from "../components/Title"
import TwoContent from "../components/TwoContent"
import "../styles/globalStyles.css"
import girl1 from "../images/girl1.jpg"
import boy1 from "../images/boy1.jpg"
import group from "../images/group.jpg"
import dance from "../images/dance.jpg"
import music from "../images/music.jpg"
import model from "../images/model.jpg"
import Form from "../components/Form"
import ContactInformation from "../components/ContactInformation"
import Navbar from "../components/Navbar"

const styles = {
	background: "black",
	color: "white",
}

const reasons = (
	<ul>
		<li>✔ Je doet altijd wat je droomde te doen.</li>
		<li>✔ Je hebt meer zelfvertrouwen.</li>
		<li>✔ Je hebt meer likes.</li>
		<li>✔ Je hebt nieuwe volgers.</li>
		<li>✔ Je hebt meer views.</li>
		<li>✔ Je wordt meer geboekt: optretends, shows, etc.</li>
	</ul>
)

// markup
const IndexPage = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main style={styles}>
				<Header></Header>
				<TwoContent
					title="“The way to get started
is to quit talking and begin doing.“"
					text="PAMBU is het middel die jongeren via Social Media een platform aanbiedt om aan de hand van persoonlijke focus, begeleiding en meer bekendbaarheid het maximale van hun talent helpt ontwikkelen.
        
        Het gaat er specifiek om stapsgewijs op weg te gaan met deze jongeren, om hun dromen te helpen realiseren. Binnen dit proces ligt de focus op hun talenten. Deze brengen we buiten aan de hand van opdrachten, projecten en evenementen."
					image={girl1}
					btnBool={true}
					btnText="Registreer nu"
					btnLink="#"
				/>
				<Title text="“Dus, blijf niet dromen kom naar PAMBU: Modellen, muzikanten en dansers! “"></Title>
				<TwoContent
					title="“Talent without hard work and discipline is nothing”"
					text="Voor het eerst MOET je jezelf zijn want het maakt hier niet uit wie je bent, waar je van komt of waar je naartoe gaat. Zolang je een droom hebt, staat PAMBU voor jouw klaar!

PAMBU vertrekt vanuit positieve bekrachtiging waarbij motivatie, respect, discipline en volharding centraal staan. Dit zijn basis ingrediënten om je dromen te realiseren. "
					image={boy1}
					reverse={true}
				/>
				<Title
					text="Wanneer is een droom gerealiseerd?"
					subtitle="Insert inspiring quote here"
				></Title>
				<TwoContent title="" text={reasons} image={group} />
				<Title
					text="Onze diensten"
					subtitle="Als Social Media expert kiest PAMBU ervoor om met professionals te werken die de nodige kennis en deskundigheid aan kunnen bieden. Er wordt gereikt naar een praktijkgerichte methodiek via projectmatig werken. Hiervoor maken we gebruik van onze waardevolle kanalen zoals Facebook, Instagram, YouTube etc."
				></Title>
				<section className="card-wrapper">
					<ServiceCard
						title="Dans"
						description={`‘’The secret is not being perfect’’`}
						image={dance}
						linkTo="/dance"
					/>
					<ServiceCard
						title="Model"
						description={`‘’Music is the medicine of the mind’’`}
						image={model}
						linkTo="/modelling"
					/>
					<ServiceCard
						title="Muziek"
						description={`“They call it dance, we call it life”`}
						image={music}
						linkTo="/music"
					/>
				</section>
				<Title
					text="Once you choose PAMBU, everything is possible!"
					subtitle="Prijzen vanaf vanaf €100,-"
				></Title>

				<section className="contact-section">
					<ContactInformation />
					<Form />
				</section>
			</main>
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
		</>
	)
}

export default IndexPage
