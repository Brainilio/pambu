import React from "react"
import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import Title from "../components/Title"
import mus from "../images/music.jpg"
import { graphql } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"

const photos = ({ data }) => {
	const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<PageHeader text="Gallerij" image={mus} />
				<Title text="ONZE FOTOS"></Title>
				<section
					className="photos-gallery"
					style={{ width: "100vw", overflowX: "hidden" }}
				>
					<Gallery images={images} />
				</section>
			</main>
			<div className="whitespace"></div>

			<footer>
				© 2021 Pambu | All Rights Reserved | Made with{" "}
				<span role="img">🖤</span> by{" "}
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

export const pageQuery = graphql`
	query ImagesForGallery {
		allFile {
			edges {
				node {
					childImageSharp {
						thumb: gatsbyImageData(
							width: 270
							height: 270
							placeholder: BLURRED
						)
						full: gatsbyImageData(layout: FULL_WIDTH)
					}
				}
			}
		}
	}
`

export default photos
