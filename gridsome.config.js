// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'cloudhooks',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/docs/', title: 'Docs' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/actions/',
              '/docs/examples/',
            ]
          }
        ]
      },
      {
        name: 'terms',
        sections: [
          {
            title: 'Cloudhooks',
            items: [
              '/docs/terms/',
              '/docs/privacy/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          content: [
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.html',
            './src/**/*.pug',
            './src/**/*.md',
          ],
          whitelist: [
              'body',
              'html',
              'img',
              'a',
              'g-image',
              'g-image--lazy',
              'g-image--loaded',
          ],
          whitelistPatternsChildren: [/token$/],
          extractors: [
              {
                  extractor: content => content.match(/[A-z0-9-:\\/]+/g),
                  extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
              },
          ],
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
