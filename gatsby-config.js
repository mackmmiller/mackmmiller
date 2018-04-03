module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
