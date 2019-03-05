module.exports = {
    siteMetadata: {
        title: `The State Of TC`
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-netlify',
        'gatsby-plugin-eslint',
    ]
}
