<!-- Menu.vue -->

<template>
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
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
  
  <style scoped>
  /* Add CSS styles here */
  .menu {
    padding: 10px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-right: 10px;
  }
  a {
    color: #fff; /* White text color */
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  