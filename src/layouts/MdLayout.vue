<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{ title }}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <slot />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  metaInfo() {
    return {
      title: this.title
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  @include font-size($h1);
}
</style>
