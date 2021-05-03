import React, { useState } from "react"
import "../styles/form.css"

const INITIAL_STATE = {
	naam: null,
	email: null,
	dienst: null,
	interesse: null,
	bericht: null,
}

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

const Form = () => {
	const [loader, setLoader] = useState(false)
	const [success, setSuccess] = useState(false)
	const [fail, setFail] = useState(false)
	const [showForm, setShowFarm] = useState(true)
	const [message, setMessage] = useState(null)
	const [form, setForm] = useState({
		...INITIAL_STATE,
	})

	const changeHandler = (e) => {
		const name = e.target.name
		const value = e.target.value
		setMessage("")

		setForm({
			...form,
			[name]: value,
		})
	}

	const submit = async (e) => {
		e.preventDefault()
		if (!form.naam || !form.email || !form.interesse || !form.dienst) {
			setMessage("Vul alsjeblieft alle velden in.")
		} else {
			setSuccess(false)
			setFail(false)
			setLoader(true)
			setShowFarm(false)

			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contact", ...form }),
			})
				.then(() => {
					setFail(false)
					setLoader(false)
					setSuccess(true)
					setShowFarm(false)
				})
				.catch(() => {
					setLoader(false)
					setSuccess(false)
					setFail(true)
					setShowFarm(false)
				})
			console.log(form)
		}
	}

	let formElement = (
		<form onSubmit={submit} method="POST" name="contact">
			{message ? <span style={{ color: "red" }}>{message}</span> : null}
			<div>
				<label htmlFor="naam">Uw naam:</label>
				<input
					onInput={changeHandler}
					value={form.naam || ""}
					type="text"
					id="naam"
					name="naam"
					placeholder="J. Doe"
				></input>
			</div>
			<div>
				<label htmlFor="email">Uw e-mailadres:</label>
				<input
					value={form.email || ""}
					onInput={changeHandler}
					type="email"
					id="email"
					name="email"
					placeholder="John@Doe.com"
				></input>
			</div>

			<div>
				<label htmlFor="dienst">Geselecteerde dienst:</label>
				<select
					name="dienst"
					value={form.dienst || ""}
					id="dienst"
					onInput={changeHandler}
				>
					<option disabled value="">
						Selecteer optie
					</option>
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
							onInput={changeHandler}
							type="radio"
							id="offerte"
							name="interesse"
							value="Offerte"
						></input>
						<label htmlFor="offerte">Offerte</label>
					</div>
					<div>
						<input
							onInput={changeHandler}
							type="radio"
							id="overleg"
							name="interesse"
							value="Overleg"
						></input>
						<label htmlFor="overleg">Overleg</label>
					</div>
				</div>
			</div>
			<div>
				<label htmlFor="bericht">Bericht:</label>
				<textarea
					value={form.bericht || ""}
					onInput={changeHandler}
					type="bericht"
					id="bericht"
					name="bericht"
					placeholder="Ik ben geinteresseerd in...."
				></textarea>
			</div>
			<div>
				<input type="submit" value="INDIENEN"></input>
			</div>
		</form>
	)

	return (
		<div className="contact-form">
			<h2>Contactformulier</h2>
			{fail ? (
				<div className="fail-form">
					<h2>Huh! Something went wrong.</h2>
					<span
						aria-hidden="true"
						onClick={() => {
							setFail(false)
							setShowFarm(true)
						}}
					>
						Try again maybe?
					</span>
				</div>
			) : null}
			{success ? (
				<div className="success-form">
					<h2>Je verzoek is succesvol ontvangen.</h2>
					<span>We hopen zo snel mogelijk in contact te komen met je.</span>
				</div>
			) : null}
			{loader ? <pre>Formulier sturen...</pre> : null}
			{showForm ? formElement : null}
		</div>
	)
}

export default Form
