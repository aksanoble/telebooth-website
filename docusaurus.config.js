const path = require("path");

module.exports = {
  title: "Telebooth",
  tagline: "Open source customer support built on Telegram",

  url: "https://telebooth.kanthi.io",
  baseUrl: "/",
  favicon: "img/favicon/favicon.ico",

  organizationName: "aksanoble",
  projectName: "Telebooth",
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    sidebarCollapsible: true,
    image: "img/github/app-action.jpg",
    announcementBar: {},
    navbar: {
      title: "Telebooth",
      logo: {
        alt: "Telebooth Logo",
        src: "img/logo.png"
      },
      items: [
        {
          to: "/docs",
          activeBasePath: "/docs",
          label: "Documentation",
          position: "right"
        },
        {
          href: "https://github.com/aksanoble/telebooth",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} All rights reserved.`,
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/index"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/aksanoble/telebooth"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/aksanoble"
            }
          ]
        }
      ]
    },
    gtag: {
      trackingID: "G-C7TH3W4JV3"
    }
  },
  scripts: [
    {
      src: "/js/scroll-to.js"
    }
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap"
  ],
  presets: [
    [
      require.resolve("@docusaurus/preset-classic"),
      {
        docs: {
          path: "docs",
          include: ["**/*.md", "**/*.mdx"],
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/aksanoble/telebooth-website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        sitemap: {
          cacheTime: 600 * 1001, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve("@docusaurus/plugin-ideal-image"),
      {
        size: 800,
        max: 800,
        min: 200,
        quality: 100
      }
    ],
    path.join(__dirname, "/plugins/monaco-editor")
  ]
};
