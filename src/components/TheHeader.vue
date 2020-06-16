<template>
  <header>
    <nav>
      <g-link to="/">code</g-link>
      <g-link to="/music">music</g-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  margin: 2em 0 4em;
}
nav {
  a {
    color: var(--brand-grey);
    &.active--exact {
      color: var(--brand-white);
    }
    &:not(:first-child) {
      margin-left: 15px;
    }
  }
}
</style>
