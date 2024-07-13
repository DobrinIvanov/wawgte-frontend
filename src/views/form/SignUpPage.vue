
<template>
    <div class="p-10 m-32 w-96 rounded-md bg-black-2">
    <h1 class="scale-90 mb-6 font-semibold">Sign up here!</h1>
    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
        <input type="email" id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg  block w-full p-2.5"
          placeholder="example@gmail.com" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
        <input type="password" id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg block w-full p-2.5" placeholder="Password"
          required />
      </div>

      <button type="submit"
        class="text-black-1 bg-white-2 focus:ring-4 focus:outline-none
        font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>

  </div>
  <!-- <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div> -->
</template>


<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      console.log('Form submitted:', userData);
    },
  },
};
</script>
<style>
</style>
  