<!-- Menu.vue -->

<template>
    <div class="bg-blue-100 px-14 py-2 container mx-auto">
      <ul class='container mx-auto'>
        <li v-for="(item, index) in menuItems" :key="index" class="px-4 mx-auto inline-flex border-black px-">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { text: 'Home', link: '/' },
          { text: 'Recipes', link: '/recipes'},
          { text: 'About', link: '/about' },
          { text: 'Contact', link: '/contact' }
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Add CSS styles here */
  </style>
  