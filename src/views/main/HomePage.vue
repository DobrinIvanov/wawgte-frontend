<!-- Main.vue -->

<template>
  <div>
    <nav class="bg-black-2 border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <a href="#" class="flex items-center">
            <img src="@/assets/food-logo.png" class="h-12" alt="WAWGTE Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WAWGTE</span>
          </a>
        </div>
        <div>
          <a href="/" class="px-4 menu-btn">Home</a>
          <a href="/all-recipes" class="px-4 menu-btn">Recipes</a>
          <a href="/all-cookbooks" class="px-4 menu-btn">Cookbooks</a>
          <a href="/about" class="px-4 menu-btn">About</a>
        </div>
        <div v-if="this.logged" class="flex flex-row">
          <a href="/login" class="menu-btn px-4">My Account</a>
        </div>
        <div v-else>
          <a href="/login" class="menu-btn px-4">Login</a>
          <a href="/sign-up" class="menu-btn px-4">Sign up</a>
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
    return {
      logged: false,
    };
  },
  components: {
    Header,
  }
};
</script>