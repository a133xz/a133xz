<template>
  <Layout>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h1 v-html="$t('home.intro')"></h1>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
h1 {
  // background: linear-gradient(135deg, rgba(46, 0, 214, 0) 56%, #696e6b 98%),
  //   linear-gradient(25deg, #414141 23%, #3d3c3c 60%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  font-variant-numeric: diagonal-fractions oldstyle-nums;

  @media (min-width: 1200px) {
    @include font-size($h00);
  }
}
</style>
