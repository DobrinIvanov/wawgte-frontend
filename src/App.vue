<!-- App.vue -->

<template>
  <div id="app">
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
#app {
  background-color: #FFF;
  height: 500px;
}
/* Add global styles here */
</style>
