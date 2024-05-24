<!-- App.vue -->
<!-- look into this code to resolve home page issues: 
https://github.com/Bienfait-ijambo/vue-course/blob/vue-router-lesson/src/views/blog/BlogPage.vue
-->
<template>
  <div>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>

export default {
  data() {
    pageTitle: "App.vue"
  }
};

</script>

<style></style>
