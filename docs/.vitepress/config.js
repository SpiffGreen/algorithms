export default {
  title: 'Algorithms Practice',
  description: 'An open source for algorithms, documenting my journey in DSA',
  base: "/algorithms",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/spiffgreen/algorithms' },
    ],
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/spiffgreen/algorithms' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: "Overview",
            link: "/"
          }
        ]
      },
      {
        text: "Algorithm",
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: "Data Structure Basics",
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: "Sorting",
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: "Searching Algorithms",
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: "Graphs",
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: "Trees",
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: "Recursion Algorithms",
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: "Others",
        collapsible: true,
        items: [
          { text: 'Algorithm Challenges', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/spiffgreen/algorithms/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Spiff Jekey-Green'
    }
  }
}
