<template>
  <div class="p-10 m-32 w-96 rounded-md bg-stone-400 shadow-md shadow-lime-100">
    <h1 class="scale-90"><img src="@/assets/login.png" class="h-10 w-10 m-3 inline-block" />Login</h1>
    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
        <input type="email" id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
          placeholder="example@gmail.com" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
        <input type="password" id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
          required />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-3 focus:ring-lime-300"
            required />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
      </div>
      <button type="submit"
        class="text-grey-700 bg-lime-200 hover:bg-lime-300 focus:ring-4 focus:outline-none
        focus:ring-lime-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
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
