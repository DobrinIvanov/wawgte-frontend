<template>
    <div class="bg-yellow-300 flex flex-row">
        <div v-for="cookbook in cookbooks">
            <h6>{{ cookbook.title }}</h6>
            <span> {{ cookbook.description }}</span>
        </div>
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