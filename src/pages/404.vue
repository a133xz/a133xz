<template>
  <div class="drama">
    <h2>404: Something is wrong but the animation is fun.</h2>
    <lottie-player
      src="https://assets10.lottiefiles.com/packages/lf20_7CAQeC.json"
      background="#3E00FF"
      speed="1"
      style="width: 300px; height: 300px;"
      loop
      autoplay
    ></lottie-player>
    <p>Return <g-link to="/">home</g-link>.</p>
  </div>
</template>

<script>
export default {
  name: "404",
  metaInfo: {
    script: [
      {
        src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        async: true,
        defer: true
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.drama {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
lottie-player {
  margin-top: var(--spacer-md);
  margin-bottom: var(--spacer-md);
}
a {
  display: inline-block;
  text-decoration: underline;
}
</style>
