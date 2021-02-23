import * as React from "react"
import Header from "../components/Header"
import Title from "../components/Title"
import TwoContent from "../components/TwoContent"
import "../styles/globalStyles.css"
import girl1 from "../images/girl1.jpg"
import boy1 from "../images/boy1.jpg"

const styles = {
	background: "black",
	color: "white",
}

// markup
const IndexPage = () => {
	return (
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
		</main>
	)
}

export default IndexPage
