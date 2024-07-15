<!-- Header.vue -->

<template>
  <nav class="bg-black-2 border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div>
        <RouterLink to="#" class="flex items-center">
          <img src="@/assets/food-logo.png" class="h-12" alt="WAWGTE Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WAWGTE</span>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/" class="px-4 menu-btn">Home</RouterLink>
        <RouterLink to="/all-recipes" class="px-4 menu-btn">Recipes</RouterLink>
        <RouterLink to="/all-cookbooks" class="px-4 menu-btn">Cookbooks</RouterLink>
        <RouterLink to="/about" class="px-4 menu-btn">About</RouterLink>
      </div>
      <div v-if="isLoggedIn" class="flex flex-row">
        <RouterLink to="/login" class="menu-btn px-4">My Account</RouterLink>
      </div>
      <div v-else>
        <RouterLink to="/login" class="menu-btn px-4">Login</RouterLink>
        <RouterLink to="/sign-up" class="menu-btn px-4">Sign up</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components:{
    Menu,
  },
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true
    }
  },
  data() {

  },
};
</script>

<style >
</style>
