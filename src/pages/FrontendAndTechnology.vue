<template>
  <Layout>
    <div class="container page">
      <div class="row">
        <div class="col">
          <section>
            <div class="page-desc mb-4" v-html="$t('work.title')" />
            <div class="row mb-3">
              <figure v-for="(item, index) in $t('work.items')" :key="index" class="col-md-12">
                <figcaption>{{ item.title }}</figcaption>
                <ul>
                  <li v-for="(content, indexList) in item.list" :key="indexList">
                    {{ content }}
                  </li>
                </ul>
              </figure>
            </div>
            <div class="block-secondary">
              <div class="block-secondary__title">
                <a href="https://www.ordinary.finance/" rel="noopener noreferrer" target="_blank">
                  {{ $t('work.of.title') }} <span><Icon name="arrow-up-right" /></span>
                </a>
              </div>
              <div>{{ $t('work.of.desc') }}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Icon from '@/components/IconLoader';
export default {
  name: 'HomePage',
  components: {
    Icon
  }
};
</script>


<style lang="scss" scoped>
.page-desc {
  @include font-size($h3);
}

figcaption {
  @include font-size($h3);
  margin-bottom: 10px;
  font-weight: bold;
}
</style>

