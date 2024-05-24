<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
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
