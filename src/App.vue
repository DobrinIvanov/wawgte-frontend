<!-- App.vue -->

<template>
  <div>
    <Header />
    <Menu />
    <!-- Other components and content -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';

export default {
  components: {
    Header,
    Menu
  }
};
</script>

<style>
/* Add global styles here */
</style>
