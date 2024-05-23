<!-- App.vue -->
<!-- look into this code to resolve home page issues: 
https://github.com/Bienfait-ijambo/vue-course/blob/vue-router-lesson/src/views/blog/BlogPage.vue
-->
<template>
  <Header />
  Does this appear?
  <main>
    <RouterView />
  </main>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
};
</script>

<style></style>
