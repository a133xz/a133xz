<template>
  <Layout>
    <div class="container page">
      <div class="row">
        <div class="col">
          <section>
            <header>
              <h2 class="mb-4">
                {{ $t('portfolio.title') }}
              </h2>
            </header>
            <aside v-for="(item, index) in $t('portfolio.projects')" :key="index" class="d-flex">
              <div class="portfolio-year">
                <span> {{ item.year }}</span>
              </div>
              <div class="ms-3">
                <a
                  v-if="item.link"
                  class="portfolio-title"
                  :href="item.link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{{ item.title }}</span>
                  <span><Icon name="arrow-up-right" /></span>
                </a>
                <div v-else class="portfolio-title">{{ item.title }}</div>
                <p class="portfolio-desc">{{ item.description }}</p>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Icon from '@/components/IconLoader';
//import LeftNavigation from '@/components/LeftNavigation';
export default {
  name: 'HomePage',
  components: {
    Icon
    //LeftNavigation
  }
};
</script>


<style lang="scss" scoped>
h2,
aside {
  @include font-p;
  font-weight: 300;
}
h2 {
  @include font-size($h3);
  text-align: right;
}
aside {
  @include font-size($h5);
  padding: 1rem 0 0;
  border-top: 2px solid var(--site-primary);
}

.portfolio-title,
.portfolio-year {
  font-weight: 500;
  line-height: 1;
}

.portfolio-title {
  display: block;
  padding-bottom: 0.5rem;
}
</style>

