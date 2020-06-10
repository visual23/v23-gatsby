/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const WorkDetailTemplate = path.resolve("./src/templates/work-detail.js")
  const result = await graphql(`
    {
      allWordpressWpWork {
        edges {
          node {
            title
            slug 
            wordpress_id
            id          
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const WorkPosts = result.data.allWordpressWpWork.edges
  WorkPosts.forEach((post, index) => {
    //const post_path = post.frontmatter.path
    createPage({
      path: `/projects/${post.node.slug}`,
      //post_path,
      component: WorkDetailTemplate,
      context: {
        id: post.node.wordpress_id,
        pathSlug: post.node.slug,
        prev: index === 0 ? null : WorkPosts[index - 1].node,
        next: index === (WorkPosts.length - 1) ? null : WorkPosts[index + 1].node,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@fullpage/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
}
;