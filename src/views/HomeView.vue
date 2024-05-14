<template>
    <div id="homeview">
      <Header />
      <Menu />
      <p>Is this going to appear? This is HomeView.vue</p>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Menu from '../components/Menu.vue'
  
  export default {
    components: {
      Header,
      Menu
    },
    // Other configurations for your HomeView
  }
  </script>
  
  <style>

  </style>
  