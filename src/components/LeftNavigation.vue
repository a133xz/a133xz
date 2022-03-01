<template>
  <div class="col-sm-2">
    <div class="block-secondary">
      <span class="emoji pe-2">🎛</span>
      <a href="404" rel="noopener noreferrer" target="_blank">
        My Spotify playlist <span class="light"><Icon name="arrow-up-right" /></span>
      </a>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/IconLoader';
export default {
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
.light {
  color: var(--site-light);
}
.block-secondary {
  font-size: 0.7rem;
  @include breakpoint(mobile-only) {
    display: none;
    width: 100%;
  }
}
</style>
