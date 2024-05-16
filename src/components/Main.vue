<!-- Main.vue -->

<template>
  <div >
    <Header />
    <MainContent />
    <!-- <Menu :menuItems="menuItems" />
    <Footer /> -->
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
    return {
      menuItems: [
        { text: 'Home', link: '#' },
        { text: 'About', link: '#' },
        { text: 'Services', link: '#' },
        { text: 'Contact', link: '#' },
      ]
    };
  },
};
</script>

<style scoped>
/* TailwindCSS styles */
</style>
