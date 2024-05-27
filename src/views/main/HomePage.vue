<!-- Main.vue -->

<template>
    <div class="flex-row flex bg-pink-200 h-screen">
      <div id="left-side-menu" class="flex bg-green-100 h-screen w-16">
        <ul class="">
          <li>Home</li>
          <li>Recipes</li>
          <li>Cookbooks</li>
          <li>About</li>
        </ul>
      </div>
      <div class="flex flex-col w-screen bg-red-300 h-48">
        <div class="flex flex-row">
          <div class="w-1/2 text-center">
            <h1 class="">What Are We Going To Eat?</h1>
          </div>
          <div class="w-1/2 border-solid border border-black flex-row justify-end">
            <button class="flex">Login</button>
            <button class="flex">SignUp</button>
          </div>
        </div>
        <div class="flex h-screen bg-blue-200">
          <main>
            <RouterView />
          </main>
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
  