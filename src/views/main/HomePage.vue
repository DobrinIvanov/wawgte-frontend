<!-- Main.vue -->

<template>
    <div class="flex-row flex bg-pink-200 h-screen">
      <div id="left-side-menu" class="flex bg-green-100 h-screen w-16">
        <ul class="flex flex-col justify-evenly">
          <li class="flex">Home</li>
          <li class="flex">Recipes</li>
          <li class="flex">Cookbooks</li>
          <li class="flex">About</li>
        </ul>
      </div>
      <div class="flex flex-col w-screen bg-red-300">
        <div class="flex flex-rox h-20">
          <div class="w-1/2 text-center flex">
            <h1 class="text-3xl">What Are We Going To Eat?</h1>
          </div>
          <div class="w-1/2 border-solid border border-black flex-row justify-end flex">
            <button class="flex h-9">Login</button>
            <button class="flex h-9">SignUp</button>
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
  