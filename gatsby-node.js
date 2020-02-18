const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const directorTemplate = path.resolve(`src/templates/director-template.js`)

  return graphql(
    `
      query  {
        allMarkdownRemark(
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

    result.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
          // Path for this page — required
          path: `${node.frontmatter.slug}/${node.frontmatter.lang}/`,
          component: directorTemplate,
          context: {
            slug: node.frontmatter.slug,
            lang: node.frontmatter.lang
          },
        })
    })
  })
}
