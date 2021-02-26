import React from "react"
import "../styles/photoGrid.css"
import Button from "./Button"

const PhotoGrid = () => {
	return (
		<div className="photo-grid">
			<div className="grid">
				<div className="first">
					<div className="f-first-photo"></div>
					<div className="f-second-photo"></div>
				</div>
				<div className="second">
					<div className="s-second-photo"></div>

					<div className="s-first-photo"></div>
				</div>
				<div className="third">
					<div className="t-first-photo"></div>
					<div className="t-second-photo"></div>
				</div>
			</div>
			<div className="grid-footer">
				<p>Ons fotogallerij</p>
				<Button text="Zie meer" />
			</div>
		</div>
	)
}

export default PhotoGrid
