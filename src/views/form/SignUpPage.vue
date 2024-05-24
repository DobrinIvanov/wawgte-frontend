
<template>
  <div>
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
  </div>
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
  