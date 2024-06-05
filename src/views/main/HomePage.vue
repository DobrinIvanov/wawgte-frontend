<!-- Main.vue -->

<!-- <template>
  <div class="flex-row flex h-screen p-5 shadow-2xl shadow-orange-200 font-mono bg-white-2">
    <div id="left-side-menu" class="flex h-full w-16 fixed left-44">
      <ul class="flex flex-col justify-evenly">
        <li class="flex"><a class="menu-btn" href="/"><img src="@/assets/home.png"/></a></li>
        <li class="flex"><a class="menu-btn" href="/recipes"><img alt="Recipes" src="@/assets/recipe.png" /></a></li>
        <li class="flex"><a class="menu-btn" href="/cookbooks"><img alt="Cookbooks" src="@/assets/cookbook.png" /></a></li>
        <li class="flex"><a class="menu-btn" href="/about"><img alt="About page" src="@/assets/about.png" /></a></li>
      </ul>
    </div>
    <div class="flex flex-col w-screen">
      <div class="flex flex-rox h-32 justify-between rounded-md ">
        <div class="w-1/2 justify-center flex items-center">
          <h1 class="text-3xl absolute font-semibold text-black-2">What Are We Going To Eat?</h1>
        </div>
        <div class=" flex-row justify-evenly items-center flex">
          <a href="/login">
            <button
              class="border-green-2 border flex h-9 w-auto
                    items-center justify-center p-4 m-2
                    bg-gradient-to-r from-black-1 to-black-2
                    rounded-lg shadow-sm shadow-green-200">Login</button>
          </a>
          <a href="/sign-up">
            <button
              class="border-green-2 border flex h-9 w-auto
              items-center justify-center p-4 m-2
              bg-gradient-to-r from-black-1 to-black-2
              rounded-lg shadow-sm shadow-green-200">SignUp</button>
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center h-full">
        <RouterView />
      </div>
    </div>
  </div>
</template> -->

<template>

  <div>
    <nav class="bg-black-2 border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <a href="#" class="flex items-center">
            <img src="@/assets/food-logo.png" class="h-8" alt="WAWGTE Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WAWGTE</span>
          </a>
        </div>
        <div>
          <a href="/auth" class="px-4 menu-btn">Home</a>
          <a href="/recipes" class="px-4 menu-btn">Recipes</a>
          <a href="/cookbooks" class="px-4 menu-btn">Cookbooks</a>
          <a href="/about" class="px-4 menu-btn">About</a>
        </div>
        <div>
          <a href="/login" class="menu-btn">Login</a>
          <a href="/sign-up" class="menu-btn">Sign up</a>
        </div>


      </div>
    </nav>
    <main>
      <RouterView />
    </main>
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
<style></style>