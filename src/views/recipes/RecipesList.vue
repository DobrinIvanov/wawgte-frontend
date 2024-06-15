<template>
    <div class="bg-orange-1 m-6">
      <div v-if="recipes.length > 0">
        <ul class="flex flex-wrap justify-evenly">
          <li class="m-2 bg-black-1 w-48 h-32" v-for="recipe in recipes" :key="recipe.recipe_id">
            <a href="/recipe">
              <div>
                  {{ recipe.title }}
              </div>
              <div>
                  {{ recipe.author }}
              </div>
              <div>
                {{ recipe.description }}
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div v-else>
        Loading...
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
        axios.get("http://backend.wawgte.com/recipes").then(response => {
            this.recipes = response.data;
        })
        .catch(error => {
            console.error('There was an error fetching the recipes:', error);
        })
       
    }
}

</script>