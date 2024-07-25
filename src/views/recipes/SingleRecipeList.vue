<template>

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
        axios.get("http://backend.wawgte.com/recipes").then(response => {
            this.recipes = response.data;
        })
        .catch(error => {
            console.error('There was an error fetching the recipes:', error);
        })
       
    }
}

</script>