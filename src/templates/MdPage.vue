<template>
  <MdContent
    :title="$page.post.title"
    :content="$page.post.content"
    :description="$page.post.excerpt"
  />
</template>

<page-query>
query LegalPage ($path: String!) {
  post: mdPage (path: $path) {
    title
    content,
    excerpt
  }
}
</page-query>

<script>
import MdContent from '@/components/MdContent';
export default {
  components: {
    MdContent
  }
};
</script>
