<template>
  <div class="m-32 w-96 h-3/5 rounded-md bg-stone-300 shadow-md shadow-indigo-400">
    <h1 class="p-6"><img src="@/assets/login.png" class="h-10 w-10 m-3 inline-block"/>Login</h1>
    <form @submit.prevent="submitForm" class="flex-col flex">
      <div class="flex p-8">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="flex pl-8">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button class="" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      const loginData = {
        email: this.email,
        password: this.password,
      };
      console.log('Form submitted:', loginData);
      // You can add your form submission logic here, e.g., send data to the server
    },
  },
};
</script>
