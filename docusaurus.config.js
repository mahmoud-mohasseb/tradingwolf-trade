// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TradingWolf",
  tagline: "IMPROVE TRADING SKILLS WITH SMART ALGORITHMS",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon:
    "https://www.tradingwolf.com/wp-content/uploads/2022/07/tradingwolf-icon.png.webp",
  organizationName: "TradingWolf", // Usually your GitHub org/user name.
  projectName: "https://doc-tradingwolf.netlify.app/", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  //   themes: [
  //   [
  //     "@easyops-cn/docusaurus-search-local",
  //     {
  //       hashed: true,
  //       language: ["en"],
  //       highlightSearchTermsOnTargetPage: true,
  //       explicitSearchResultPath: true,
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: "TradeWolf_trade with us",
        content: `📈&nbsp; If you like to trade, visit our website <a target="_blank" rel="noopener noreferrer" href="https://tradingwolf.com/">https://www.tradingwolf.com</a>! &nbsp;`,
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        // title: 'My Site',
        logo: {
          alt: "💹 Tradingwolf",
          src: "https://www.tradingwolf.com/wp-content/uploads/2022/07/tradingwolf-logo.png.webp",
        },
        items: [
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsBefore: [],
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Getting Started",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://discord.com/invite/tradingwolf",
            className: "pseudo-icon discord-icon",
            position: "right",
          },
          {
            to: "https://www.tradingwolf.com/",
            label: "Our Website",
            position: "left",
          },
          {
            to: "https://www.tradingwolf.com/pricing-plans/",
            label: "SignUp",
            position: "left",
          },
          {
            to: "https://www.tradingwolf.com/features/overlay-indicators/",
            label: "TradingView",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          href: "/",
          src: "img/brandmark-design.png",
          // src: "https://www.tradingwolf.com/wp-content/uploads/2022/07/tradingwolf-icon.png.webp",
          // srcDark:"./assets/brandmark-design.png",
          // srcDark:
          //   "https://cdn.dribbble.com/users/60166/screenshots/17217488/media/02728f99e977931182d683b6792a17b1.jpg?compress=1&resize=400x300",
          alt: "",
        },
        links: [
          {
            title: "Docs",
            items: [
              // {
              //   label: 'Tutorial',
              //   to: '/docs/intro',
              // },
              {
                label: "FAQ",
                to: "/docs/category/-fqa",
              },

              {
                label: "Technical-analytics",
                to: "/docs/category/-technical-analytics",
              },
              {
                label: "technical-oscillators",
                to: "https://www.tradingwolf.com/features/technical-oscillators/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: "Discord",
                href: "https://discord.com/invite/tradingwolf",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/TradeLikeAWolf",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Terms",
                to: "https://www.tradingwolf.com/terms/",
              },
              {
                label: "Privacy Policy",
                to: "https://www.tradingwolf.com/privacy-policy/",
              },
              {
                label: "Cookies",
                to: "https://www.tradingwolf.com/cookies/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}TradingWolf.com. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
