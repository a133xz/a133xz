<template>
  <svg
    :class="`icon icon-${name}`"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    aria-hidden="true"
    role="img"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  //min-width: 100%;
  min-height: 1em;
  max-width: 20px;
  max-height: 1em;
  vertical-align: -0.125em;
}
</style>
