const path = require("path");

const PATH_PREFIX = process.env.PATH_PREFIX;

module.exports = {
  pathPrefix: PATH_PREFIX || `/cloud-computing-notes`,
  siteMetadata: {
    // some SEO configs using by gatsby-theme-kb
    title: `Cloud computing notes`, // Replace it with your site's title
    author: `Daniel VG`, // Replace it with your name
    description: `Cloud computing notes from the HSKA SS/21`, // Replace it with your site's description
  },
  plugins: [
    {
      resolve: `gatsby-theme-kb`,
      options: {
        rootNote: "/cloud-computing-lecture",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
          "**/.cache/**",
        ],
        // this is an option for extending `gatsby-plugin-mdx` options inside `gatsby-theme-kb`,
        getPluginMdx(defaultPluginMdx) {
          // so you can have your relative referenced files served, e.g. '../assets/img.png'.
          defaultPluginMdx.options.gatsbyRemarkPlugins.push({
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: ["md", "mdx"],
            },
          });

          // an example of syntax highlighting
          defaultPluginMdx.options.gatsbyRemarkPlugins.push({
            resolve: "gatsby-remark-prismjs",
            options: {
              noInlineHighlight: true,
            },
          });
          return defaultPluginMdx;
        },
      },
    },
    {
      // this plugin makes sure your static files will be served by gatsby,
      //   but of course you need to reference them by absolute path, e.g. '/assets/img.png'.
      // if you have multiple directories, copy this plugin section and specify other directory
      // check https://github.com/csath/gatsby-plugin-copy-files-enhanced to find docs for this plugin
      resolve: "gatsby-plugin-copy-files-enhanced",
      options: {
        source: path.resolve(__dirname, `../assets`),
        destination: "/assets",
        purge: false,
      },
    },
  ],
};
