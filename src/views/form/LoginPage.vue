<template>
  <div class="p-10 m-32 w-96 rounded-md bg-black-2 shadow-inner shadow-black">
    <h1 class="scale-90 mb-6 font-semibold">Login</h1>
    <form class="max-w-sm mx-auto" v-on:submit.prevent="submitForm">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
        <input v-model="email" type="email" id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg block w-full p-2.5"
          placeholder="example@gmail.com" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
        <input v-model="password" type="password" id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg  block w-full p-2.5" placeholder="Password"
          required />
      </div>
      <button type="submit"
        class="text-black-2 bg-white-1 hover:bg-white-2 focus:ring-4 focus:outline-none
              font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      axios.post('https://backend.wawgte.com/login', {
        email: this.email,
        password: this.password
      }, { withCredentials: true })
      .then((response) => {
        console.log(response.status, response.data.token);
        if (response.status === 200) {
          // Handle successful login based on your backend's response structure
          console.log('Login successful:', response.data);
          this.isLoggedIn = true;
          // Redirect to the home page
          this.$router.push('/')
        } else {
          console.log('Login failed:', response.data);
          this.isLoggedIn = false;
        }
      })
      .catch((error) => console.error(error));

    },
  }
}
</script>