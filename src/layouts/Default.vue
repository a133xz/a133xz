<template>
  <div>
    <Header />
    <!-- <Aside /> -->
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/TheHeader"
import Footer from "@/components/TheFooter"

export default {
  components: {
    Header,
    Footer
  }
}
</script>
