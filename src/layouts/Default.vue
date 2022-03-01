<template>
  <div id="app">
    <SpriteSvg />
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpriteSvg from '@/components/Icons';

export default {
  name: 'DetaultTemplate',
  components: {
    SpriteSvg,
    Header,
    Footer
  }
};
</script>

