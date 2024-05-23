<!-- App.vue -->

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
