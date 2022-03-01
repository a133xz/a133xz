<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <header class="d-flex flex-wrap justify-content-between py-3">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none logo"
          >
            <span class="sr-only">Home page</span>
            <!-- <span class="fs-4">{{ $static.metadata.siteName }}</span> -->
            <Icon name="me" />
          </a>
          <div class="d-flex flex-wrap justify-content-center">
            <figure
              v-for="(item, index) in $t('navigation')"
              :key="index"
              class="nav-item"
              :class="index === 1 && 'ps-5 ps1-mobile'"
            >
              <figcaption>{{ item.title }}</figcaption>
              <ul>
                <li v-for="(link, indexList) in item.links" :key="indexList" class="nav-item">
                  <g-link class="nav-link" :to="`${link.link}`">
                    <span v-if="index === 0">{{ link.title }}</span>
                    <div v-else class="d-flex justify-content-end">
                      <span>{{ link.title }}</span>
                      <div><Icon name="arrow-up-right" /></div>
                    </div>
                  </g-link>
                </li>
              </ul>
            </figure>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Icon from '@/components/IconLoader';
export default {
  name: 'TheHeader',
  components: {
    Icon
  }
};
</script>


<style lang="scss" scoped>
.ps1-mobile {
  padding-left: 15px !important;
}
.logo {
  svg {
    margin-left: 10px;
    width: 70px;
    height: 120px;
    max-width: 100%;
    max-height: 100%;
    @include breakpoint(mobile-only) {
      width: 55px;
      height: 55px;
    }
  }
}
figure {
  margin-top: 1rem;
  text-align: right;

  a {
    border-bottom: 1px solid var(--site-primary);
  }

  figcaption {
    @include font-size($h5);
    font-weight: bold;
    text-transform: uppercase;
  }
  ul {
    padding: 0;
    li {
      list-style: none;
    }
  }
  a.active {
    background: var(--site-light);
  }
}

@media (min-width: 1400px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 98%;
  }
}
</style>
