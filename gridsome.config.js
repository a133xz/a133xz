module.exports = {
  siteName: 'Antonio R',
  siteDescription: 'Frontend Engineer based in London',
  siteUrl: 'https://antonio-r.vercel.app/',
  plugins: [
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        resources: ['@/assets/scss/_variables.scss', '@/assets/scss/_utils.scss']
      }
    },
    {
      use: 'gridsome-plugin-static-metadata',
      options: {
        image: '/meta.png',
        themeColor: '#171c31',
        robots: true
      }
    },
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: ['en'],
        fallbackLocale: 'en',
        enablePathRewrite: false,
        messages: process.env.NODE_ENV === 'production' && {
          en: require('./src/locales/en.json')
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'markdown/pages',
        path: '*.md',
        typeName: 'MdPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  },
  templates: {
    MdPage: '/:fileInfo__name'
  },
  chainWebpack: (config) => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap((options) => {
        options.plugins.unshift(...[require('postcss-import'), require('postcss-nested')]);

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(
            ...[
              require('@fullhuman/postcss-purgecss')({
                content: ['src/assets/**/*.css', 'src/**/*.vue', 'src/**/*.js']
              })
            ]
          );
        }
        return options;
      });
  }
};
