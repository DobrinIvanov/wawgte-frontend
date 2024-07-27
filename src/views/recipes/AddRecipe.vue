<template>
  <div class="p-10 m-32 rounded-md bg-black-2 flex flex-col">
    <div><h1 class="scale-90 mb-6 font-semibold text-center">Add your recipe</h1></div>
    <div class="flex flex-row">
      <div class="w-1/2">
        
        <form class="max-w-sm mx-auto" v-on:submit.prevent="addRecipe">
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium ">Title</label>
            <input type="email" id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg  block w-full p-2.5"
              placeholder="example@gmail.com" required />
          </div>
          <div class="mb-5">
            <label for="description" class="block mb-2 text-sm font-medium">Description</label>
            <input id="description"
              class="bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg block w-full p-2.5" placeholder="Description"
              required />
          </div>
          <div class="mb-5">
            <label for="instructions" class="block mb-2 text-sm font-medium">Recipe instructions</label>
            <input id="instructions"
              class="bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg block w-full p-2.5 h-64"
              required />
          </div>
    
          <button type="submit"
            class="text-black-1 bg-white-2 focus:ring-4 focus:outline-none
            font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add</button>
        </form>
      </div>
      <div class="w-1/2 flex flex-col items-center justify-evenly">
        <div class="w-full h-full">
          <img src="" class="w-32 h-32 bg-black-1"/>
        </div>
        <div class="w-full h-full">
          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename">
            <input type="submit">
          </form>
        </div>
      </div>
    </div>
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