<!-- Main.vue -->

<template>
    <div class='mx-auto'>
        <div class="bg-white shadow-md rounded-lg p-4">
            <Header class='mb-4'/>
            <Menu />
        </div>
    </div>
</template>
  
  <script>
  import Header from './Header.vue';
  import Menu from './Menu.vue';

  export default {
    components:
    {
      Header,
      Menu
    }
  };
  </script>
  
  <style>
  
  </style>
  