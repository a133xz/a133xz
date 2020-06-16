<template>
  <aside>
    👨‍💻
    <div></div>
    <a href="https://github.com/a133xz" rel="noopener noreferrer" target="_blank">github</a>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  position: sticky;
  width: 300px;
  top: 290px;
  transform: rotate(-90deg);
  display: flex;
  transition: all 0.8s;
  div {
    border-bottom: 1px solid var(--brand-white);
    width: 65px;
    margin: auto 45px;
    padding: 2px;
  }
  a {
    color: var(--brand-white);
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
</style>
