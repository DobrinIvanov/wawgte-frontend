<template>
    <div class="bg-yellow-300">

    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            cookbooks: [],
        }
    },
    mounted() {
        axios.get("http://backend.wawgte.com/cookbooks")
        .then(response => {this.cookbooks=response.data;})
        .catch(error => {
            console.error('There was an error fetching the recipes:', error);
        })

    }
}
</script>