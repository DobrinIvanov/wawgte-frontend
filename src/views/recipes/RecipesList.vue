<template>
    <div class="bg-black-2 m-6">
      <div v-if="recipes.length > 0">
        <ul class="flex flex-wrap justify-evenly">
          <li class="m-2 bg-black-1 w-48 h-32" v-for="recipe in recipes" :key="recipe.recipe_id">
            <RouterLink to="/recipe/${recipe.id}" class="px-4 menu-btn">
              <div>
                  {{ recipe.title }}
              </div>
              <div>
                  {{ recipe.author }}
              </div>
              <div>
                {{ recipe.description }}
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="p-10" v-else>
        Error displaying recipes. Contact webmaster at info@wawgte.com.
      </div>
    </div>
  </template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            recipes: [],
        };
    },
    mounted() {
        axios.get("https://backend.wawgte.com/recipes")
        .then(response => {
            this.recipes = response.data;
        })
        .catch(error => {
            console.error('There was an error fetching the recipes:', error);
        });
    }
}

</script>