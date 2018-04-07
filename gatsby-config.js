module.exports = {
  siteMetadata: {
    title: 'Mackenzie Miller | Web Developer and Designer',
    desc: 'The blog and portfolio for web developer Mackenzie Miller'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vr9gq1bw4c8a',
        accessToken:
          'ce0a5fb25b88e9e428ffc58b713397aaea5ce0930f1cc126516592a6b07038aa',
      },
    },
    'gatsby-transformer-remark'
  ],
}
