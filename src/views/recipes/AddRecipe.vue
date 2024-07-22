<template>

// TODO AddRecipe page
<div>
    <form>
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
        async submitForm() {
            try {
                // Some code for submitting form
                axios.post("https://backend.wawgte.com/recipes").then(response => {
                this.response = response.data;
        })
            } catch (error) {
                this.errorMessage = 'Recipe add failed. Please contact webmaster.';
                console.error('Recipe add error:', error);
            }
        },
    }
}
</script>