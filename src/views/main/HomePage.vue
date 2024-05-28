<!-- Main.vue -->

<template>
    <div class="flex-row flex h-screen p-5 shadow-2xl">
      <div id="left-side-menu" class="flex h-full w-16 fixed left-48">
        <ul class="flex flex-col justify-evenly">
          <li class="flex"><button><img class="" src="@/assets/home.png"/></button></li>
          <li class="flex"><button><img class="" src="@/assets/recipe.png"/></button></li>
          <li class="flex"><button><img class="" src="@/assets/cookbook.png"/></button></li>
          <li class="flex"><button><img class="" src="@/assets/about.png"/></button></li>
        </ul>
      </div>
      <div class="flex flex-col w-screen">
        <div class="flex flex-rox h-20 justify-between">
          <div class="w-1/2 justify-center flex">
            <h1 class="text-3xl absolute text-orange-500 bold">What Are We Going To Eat?</h1>
          </div>
          <div class=" flex-row justify-between flex items-end">
            <button class="flex h-9 w-auto text-center">Login</button>
            <button class="flex h-9 w-auto text-center">SignUp</button>
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
  