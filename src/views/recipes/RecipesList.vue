<template>
    <div class="bg-orange-1">
      <div v-if="recipes.length > 0">
        <ul>
          <li v-for="recipe in recipes" :key="recipe.recipe_id">
            <a href="/recipe">{{ recipe.title }} - {{ recipe.description }}</a>
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
        }
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