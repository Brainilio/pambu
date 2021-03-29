import React from "react"
import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import ServiceCard from "../components/ServiceCard"
import Title from "../components/Title"
import mus from "../images/music.jpg"
import "../styles/prijzen.css"
import dance from "../images/dance.jpg"
import music from "../images/music.jpg"
import model from "../images/model.jpg"
import ContactInformation from "../components/ContactInformation"
import Form from "../components/Form"

const prijzen = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<PageHeader text="Prijzen" image={mus} />
				<Title
					text="ONZE DIENSTEN"
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
				<Title text="PAKKETTEN" subtitle="(prijzen per jaar & per maand)" />
				<div className="price-table">
					<div className="price">
						<div className="price-left">
							<h4>DANS (per jaar)</h4>
							<span>Intake, coaching, lessen, & uitstapjes</span>
						</div>
						<h3 className="price-right">€500,-</h3>
					</div>
					<div className="price">
						<div className="price-left">
							<h4>DANS (per maand)</h4>
							<span>Intake, coaching, lessen & uitstapjes</span>
						</div>
						<h3 className="price-right">€45,-</h3>
					</div>

					<div className="price">
						<div className="price-left">
							<h4>MODELLING (per jaar)</h4>
							<span>Intake, coaching, lessen, & uitstapjes</span>
						</div>
						<h3 className="price-right">€520,-</h3>
					</div>
					<div className="price">
						<div className="price-left">
							<h4>MODELLING (per maand)</h4>
							<span>Intake, shoots, portfolio & uitstapjes</span>
						</div>
						<h3 className="price-right">€45,-</h3>
					</div>

					<div className="price">
						<div className="price-left">
							<h4>MUZIEK (per jaar)</h4>
							<span>Intake, studiosessies, lessen & uitstapjes</span>
						</div>
						<h3 className="price-right">€550,-</h3>
					</div>
					<div className="price">
						<div className="price-left">
							<h4>MUZIEK (per maand)</h4>
							<span>Intake, studiosessies, lessen & uitstapjes</span>
						</div>
						<h3 className="price-right">€50,-</h3>
					</div>
				</div>
				<section className="contact-section">
					<ContactInformation />
					<Form />
				</section>
			</main>
			<div className="whitespace"></div>
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

export default prijzen
