<template>
    <div class="bg-orange-1">
        <div>
            {{ this.recipes }}
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
    // TODO !
    mounted () {
       axios
       .get("http://backend.wawgte.com/recipes")
       .then(response => (this.recipes = response.recipes))
       .catch(error => {
        console.error('There was an error fetching the recipes:', error);
      });
       
    }
}

</script>