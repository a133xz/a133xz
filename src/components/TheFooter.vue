<template>
  <footer>
    <hr />
    potato, tomato
    <div>
      <a href="https://github.com/a133xz" rel="noopener noreferrer" target="_blank">github</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  max-width: var(--main-width);
  margin: 0 auto;
  margin-top: 6em;
  font-size: 0.8rem;
}
hr {
  margin-bottom: 1em;
}
div {
  display: inline-flex;
  float: right;
  a {
    color: var(--brand-white);
    &:first-child {
      margin-right: 15px;
    }
  }
}
</style>
