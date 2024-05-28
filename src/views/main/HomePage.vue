<!-- Main.vue -->

<template>
    <div class="flex-row flex h-screen p-5 shadow-2xl font-mono">
      <div id="left-side-menu" class="flex h-full w-16 fixed left-48">
        <ul class="flex flex-col justify-evenly">
          <li class="flex"><button class="menu-btn"><img class="" src="@/assets/home.png"/></button></li>
          <li class="flex"><button><img class="menu-btn" src="@/assets/recipe.png"/></button></li>
          <li class="flex"><button><img class="menu-btn" src="@/assets/cookbook.png"/></button></li>
          <li class="flex"><button><img class="menu-btn" src="@/assets/about.png"/></button></li>
        </ul>
      </div>
      <div class="flex flex-col w-screen">
        <div class="flex flex-rox h-20 justify-between">
          <div class="w-1/2 justify-center flex">
            <h1 class="text-3xl absolute font-mono bold">What Are We Going To Eat?</h1>
          </div>
          <div class=" flex-row justify-evenly flex items-end">
            <button class="flex h-9 w-auto items-center justify-center p-4 m-2 bg-gradient-to-r from-stone-200 to-stone-300 rounded-lg shadow-md shadow-stone-800">Login</button>
            <button class="flex h-9 w-auto items-center justify-center p-4 m-2 bg-gradient-to-r from-stone-200 to-stone-300 rounded-lg shadow-md shadow-stone-700">SignUp</button>
          </div>
        </div>
        <div class="flex justify-center items-center h-full">
            <RouterView />
        </div>
      </div>
    </div>
</template>
  
<script>
  import Header from "@/components/Header.vue"
  export default {

    data() {
      return {};
    },
    components: {
      Header,
    }
  };
  </script>
<style>
</style>
  