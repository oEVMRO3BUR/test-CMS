/**
 * Configuration de Gatsby.
 * @author Adham Hajji
 * @version 2.0.0
 * @license MIT
 */

module.exports = {
  siteMetadata: {
    title: "Blog Coddity"
  },

  plugins: [  
    // Note : Ce plugin permet de compiler les styled components.
    "gatsby-plugin-styled-components",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "assets"
      }
    },
    // Note: Ce plugin récupère les posts du blog.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "blog-posts"
      }
    },
    // Note: Ce plugin récupère les posts du blog.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/authors`,
        name: "blog-posts"
      }
    },

    // Note : Gestion des images
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    // Note : Ce plugin convertit les posts Markdown en pages HTML.
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // Note : Ce plugin permet d'utiliser des composants React au sein des posts Markdown
          'gatsby-remark-relative-images',
          "gatsby-remark-component",
          "gatsby-remark-responsive-iframe",
          // Note : Ce plugin permet de gérer les images au sein des posts Markdown
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true
            }
          },
          {
            resolve: 'gatsby-remark-audio',
            options: {
              preload: 'auto',
              loop: false,
              controls: true,
              muted: false,
              autoplay: false
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          }
        ]
      }
    },

    // Note : Ce plugin permet aux liens relatifs de ne pas actualiser la page.
    "gatsby-plugin-catch-links",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/.svg$
        }
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    }
  ]
};
