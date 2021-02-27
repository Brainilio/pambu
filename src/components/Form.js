import React from "react"
import "../styles/form.css"

const Form = () => {
	return (
		<div className="contact-form">
			<h2>Contactformulier</h2>
			<form>
				<div>
					<label htmlFor="naam">Uw naam:</label>
					<input type="text" id="naam" name="naam" placeholder="J. Doe"></input>
				</div>
				<div>
					<label htmlFor="email">Uw e-mailadres:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="John@Doe.com"
					></input>
				</div>

				<div>
					<label htmlFor="dienst">Geselecteerde dienst:</label>
					<select name="dienst" id="dienst">
						<option value="Muziek">Muziek</option>
						<option value="Model">Modelleren</option>
						<option value="Dans">Dans</option>
					</select>
				</div>
				<div className="interesse">
					<p>Geinteresseerd in:</p>
					<div>
						<div>
							<input
								type="radio"
								id="offerte"
								name="dienst"
								value="Offerte"
							></input>
							<label htmlFor="offerte">Offerte</label>
						</div>
						<div>
							<input
								type="radio"
								id="overleg"
								name="dienst"
								value="Overleg"
							></input>
							<label htmlFor="overleg">Overleg</label>
						</div>
					</div>
				</div>
				<div>
					<label htmlFor="bericht">Bericht:</label>
					<textarea
						type="bericht"
						id="bericht"
						name="bericht"
						placeholder="Ik ben geinteresseerd in...."
					></textarea>
				</div>
				<div>
					<input type="submit" value="Nu boeken"></input>
				</div>
			</form>
		</div>
	)
}

export default Form
