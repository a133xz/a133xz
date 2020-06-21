<template>
  <Layout>
    <main>
      <h1>Antonio R</h1>
      <!-- <h2>front-end engineer</h2> -->
      <p>
        Hola, I'm a front-end engineer based in London, building things for the web.
      </p>
      <p>I also do projects I think are interesting, or plain fun.</p>
      <a class="more" href="/about"><strong>🍋 more</strong></a>
    </main>
  </Layout>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    bodyAttrs: {
      style: "background-color: #f5f2f8;color: var(--brand-black);"
    }
  }
}
</script>

<style lang="scss" scoped>
::selection {
  background: var(--brand-yellow);
}
main {
  font-size: 1.1rem;
  max-width: 550px;
  margin-top: 8%;
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 0;
  line-height: 50px;
}
a {
  color: var(--brand-black);
  &:hover {
    background-color: var(--brand-yellow);
  }
}
.more {
  font-size: 0.9rem;
}
</style>
