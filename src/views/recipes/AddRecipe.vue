<template>
    <div class="p-10 m-32 w-96 rounded-md bg-black-2">
    <h1 class="scale-90 mb-6 font-semibold">Add your recipe</h1>
    <form class="max-w-sm mx-auto" v-on:submit.prevent="addRecipe">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium ">Title</label>
        <input type="email" id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg  block w-full p-2.5"
          placeholder="example@gmail.com" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium">Description</label>
        <input type="password" id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg block w-full p-2.5" placeholder="Password"
          required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium">Instructions</label>
        <input type="password" id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg block w-full p-2.5" placeholder="Password"
          required />
      </div>

      <button type="submit"
        class="text-black-1 bg-white-2 focus:ring-4 focus:outline-none
        font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add</button>
    </form>
  </div>

</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            response: {},
        };
    },
    methods: {
        async addRecipe() {
            return;
        },
    }
}
</script>