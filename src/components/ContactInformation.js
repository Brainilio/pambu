import React from "react"
import instagram from "../images/instagram.png"
import phone from "../images/phone.png"
import contactimage from "../images/contactimage.png"

const ContactInformation = () => {
	return (
		<div className="contact-explanation">
			<h2>Contacteer ons</h2>
			<span>
				Laat uw gegevens achter en wij zullen u zo spoedig mogelijk contacteren.
			</span>

			<div className="socialmediarow">
				<div className="insta">
					<img src={instagram} width="50px" height="50px" alt="icon" />
					<span>
						<a href="https://www.instagram.com/pambumedia/">@pambumedia</a>
					</span>
				</div>
				<div className="phone">
					<img src={phone} width="50px" height="50px" alt="icon" />
					<span>0612345689</span>
				</div>
			</div>
			<div className="contact-image">
				<img
					src={contactimage}
					alt="African woman looking sideways with a headwrap on"
				/>
			</div>
		</div>
	)
}

export default ContactInformation
