<template>
  <Page :title="title">
    <div class="md-content" v-html="content" />
  </Page>
</template>

<script>
import Page from '@/layouts/MdLayout';
export default {
  components: {
    Page
  },
  props: {
    content: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.description
        }
      ]
    };
  }
};
</script>
