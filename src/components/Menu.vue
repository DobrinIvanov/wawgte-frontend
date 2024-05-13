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
    border: solid 1px red;
    border-radius: 20px;
    padding: 10px;
  }
  li {
    display: inline-block;
    margin-right: 10px;
    border: solid 2px blue;
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
  