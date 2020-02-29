const path = require(`path`)
const makePath =(lang)=>{
  if (lang==='be'){
    return ''
  }
  return `${lang}/`
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const developerTemplate = path.resolve(`src/templates/developer-template.js`)
  const directorTemplate = path.resolve(`src/templates/director-template.js`)
  const mainTemplate = path.resolve(`src/templates/main-template.js`)
  const searchTemplate = path.resolve(`src/templates/search-template.js`)
  const  worklogTemplate = path.resolve(`src/templates/worklog-template.js`)
  // const  styleguideTemplate = path.resolve(`src/templates/styleguide-template.js`);
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
        path: `/directors/${node.frontmatter.slug}/${makePath(node.frontmatter.lang)}`,
        component: directorTemplate,
        context: {
          slug: node.frontmatter.slug,
          lang: node.frontmatter.lang,
        },
      })
    })

    const langArr = ['en', 'ru', 'be'];
    langArr.forEach(lang => {
      createPage({
        path: `/${makePath(lang)}`,
        component: mainTemplate,
        context: {
          lang: lang,
        },
      })
    });
    langArr.forEach(lang => {
      createPage({
        path: `/search/${makePath(lang)}`,
        component: searchTemplate,
        context: {
          lang: lang,
        },
      })
    })
    langArr.forEach(lang => {
      createPage({
        path: `/developers/${makePath(lang)}`,
        component: developerTemplate,
        context: {
          lang: lang,
        },
      })
    });
    langArr.forEach(lang => {
      createPage({
        path: `/worklog/${makePath(lang)}`,
        component: worklogTemplate,
        context: {
          lang: lang,
        },
      })
    })
    // langArr.forEach(lang => {
    //   createPage({
    //     path: `/styleguide/${makePath(lang)}`,
    //     component: styleguideTemplate,
    //     context: {
    //       lang: lang,
    //     },
    //   })
    // })
  })
}
