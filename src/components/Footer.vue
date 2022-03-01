<template>
  <footer>
    <div class="container">
      <div class="row" style="text-align: center">
        <div class="col-12">
          {{ $t('footer.date') }}
        </div>
        <div class="col-12">
          {{ $t('footer.desc') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
};
</script>

<style lang="scss" scoped>
footer {
  @include font-size($h5);
  margin-top: 2rem;
  border-top: 1px solid var(--site-body);
  padding-top: 3px;
  padding-bottom: 30px;
}

.text-right {
  text-align: right;
}
</style>



