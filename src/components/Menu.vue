<!-- Menu.vue -->

<template>
    <div class="px-14 py-2 container mx-auto flex-row h-12">
      <div class='inline-block'>
        <ul class='container mx-auto'>
          <li v-for="(item, index) in menuItems" :key="index" class="inline-block px-8 menu-btn ">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul> 
      </div>
      <div class='inline-block float-right'>
        <ul>
        <li class='inline-block menu-btn'> 
          <a> Login</a>
        </li>
        <li class='inline-block menu-btn'>
          <a> Sign up</a>
        </li>
        </ul> 
      </div>
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