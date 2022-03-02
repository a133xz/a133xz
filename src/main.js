import './assets/scss/main.scss';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { appOptions, head }) {
  // eslint-disable-next-line vue/multi-word-component-names
  Vue.component('Layout', DefaultLayout);

  appOptions.i18n.setLocaleMessage('en', require('./locales/en.json'));

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  });
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: ''
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Cormorant:wght@500;700&family=Azeret+Mono:wght@300;600&display=swap'
  });
}
