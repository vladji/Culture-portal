const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const directorTemplate = path.resolve(`src/templates/director-template.js`)
  const mainTemplate = path.resolve(`src/templates/main-template.js`)

  return graphql(
    `
      {
        directors: allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "director" } } }
        ) {
          nodes {
            frontmatter {
              lang
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.directors.nodes.forEach(node => {
      createPage({
        path: `${node.frontmatter.slug}/${node.frontmatter.lang}/`,
        component: directorTemplate,
        context: {
          slug: node.frontmatter.slug,
          lang: node.frontmatter.lang,
        },
      })
    })

    const langArr = ['en', 'ru'];
    langArr.forEach(lang => {
      createPage({
        path: `${lang}/`,
        component: mainTemplate,
        context: {
          lang: lang,
        },
      })
    })
  })
}
