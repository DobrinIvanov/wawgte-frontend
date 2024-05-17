<!-- Menu.vue -->

<template>
    <div class="bg-blue-200 px-14 py-2 container mx-auto">
      <nav class="bg-red-300">
        <a class="px-20 border-black border" v-for="(item, index) in menuItems" :key="index" :href="item.link">{{ item.text }}</a>
      </nav>
      <nav>
        <a class="px-20 border-black border">Log in</a>
        <a class="px-20 border-black border">Sign up</a>
      </nav>
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
 
 

//  <!-- <ul class='container mx-auto'>
//   <li v-for="(item, index) in menuItems" :key="index" class="px-4 inline-flex border-black border-2">
//     <a :href="item.link">{{ item.text }}</a>
//   </li>
// </ul>
// <ul class='container mx-auto'>
//   <li class='inline-flex'><button>Login</button></li>
//   <li><button>Sign up</button></li>
// </ul> -->