/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Collected Poems by Thomas Kaar`,
    description: `Thomas Kaar writes poems that reflect the frenetic chaos of these times.`,
    keywords: `poetry, thomas kaar, collected poems, Nate Astro`,
    siteURL: `http://localhost:8000`,
    name: "Thomas Kaar",
    email: `thomkaar@gmail.com`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'about',
        link: '/about'
      },
      {
        name: 'poems',
        link: '/poems'
      },
    ],
    socialLinks: [
      {
        name: 'Medium',
        link: 'https://www.medium.com/@thomkaar'
      },
      {
        name: 'Twitter',
        link: 'https://www.twitter.com/thomkaar'
      }
    ],
    summary : `I’m Thomas Nathaniel Kaar, Nate Astro, Tommy, and Thommy. I write poetry and code.`,
    acrostic: [
      "Tommy", "Hates", "O...acrostics.", "Meat isn't", "Always", "Sustainable"
    ],
    images: [
      {
        name: `Suit Tommy`,
        alt: `Tommy in a suit drinking red wine.`,
        url: `https://firebasestorage.googleapis.com/v0/b/personal-site-fcbfd.appspot.com/o/tommy_wine.png?alt=media&token=73f5e1b9-9c7a-411d-a3c7-c4972241c1c7`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Bowlby One', 'Noto Serif']
        }
      }
    }

  ]
}