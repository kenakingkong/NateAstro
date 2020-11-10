/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Collected Poems by Thomas Kaar`,
    description: `Thomas Kaar writes poetry reflecting on times of transition and security.`,
    keywords: `poetry, thomas kaar, collected poems, Nate Astro`,
    siteURL: `http://localhost:8000`,
    name: "Thomas Kaar",
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
        name: 'Email',
        link: 'mailto:thomkaar@gmail.com',
      },
      {
        name: 'Medium',
        link: 'https://www.medium.com/@thomkaar',
      },
      {
        name: 'Twitter',
        link: 'https://www.twitter.com/thomkaar',
      }
    ],
    summary : `I’m Thomas Nathaniel Kaar, Nate Astro, Tommy, and Thommy. I write poetry reflecting on times of transition and security.`,
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
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Bowlby One', 'Noto Serif']
        }
      }
    },
    {
      resolve: 'gatsby-medium-rss-feed',
      options: {
        nodeType: 'sourceNodes',
        name: 'MediumFeed',
        userName: 'ThomKaar'
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'poems-by-thomas-kaar',
          region: 'us-east-2'
      },
  },
  ]
}