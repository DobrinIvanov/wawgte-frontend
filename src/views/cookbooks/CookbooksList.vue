<template>
    <div class="bg-black-1 flex flex-row p-10">
        <div class="p-4" v-for="cookbook in cookbooks">
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
        axios.get("https://backend.wawgte.com/cookbooks")
        .then(response => {this.cookbooks=response.data;})
        .catch(error => {
            console.error('There was an error fetching the recipes:', error);
        })

    }
}
</script>