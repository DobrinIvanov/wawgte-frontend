<!-- Main.vue -->

<template>
  <div class='mx-auto container'>
    <Header />
    <Menu />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Menu from './Menu.vue';
import MainContent from './MainContent.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header,
    Menu,
    MainContent,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style>
/* TailwindCSS styles */
</style>
