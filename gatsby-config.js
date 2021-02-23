const activeEnv =
	process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
	path: `.env.${activeEnv}`,
})

module.exports = {
	siteMetadata: {
		title: "pambu",
	},
	plugins: [
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: process.env.GA_TRACKING_ID,
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
}
