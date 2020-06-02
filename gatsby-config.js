module.exports = {
  siteMetadata: {
    title: `Boost Legacy`,
    siteUrl: `https://boostlegacy.org`,
    description: `More coming soon...`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "Doc 1",
            url: "/doc1"
          },
          {
            title: "Doc 2",
            url: "/doc2"
          }
        ]
      },
      footer: {
        copyright: "boostlegacy.org",
        columns: [
          {
            heading: "Home",
            links: [
              {
                title: "Boost Legacy",
                url: "/"
              }
            ]
          },
        ]
      }
    },
    templates: {
      home: {
        totalPosts: 3,
        template: "home"
      },
      pages: {
        path: "/content/pages/",
        template: "page"
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6
            }
          }
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6
        }
      }
    }
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};
