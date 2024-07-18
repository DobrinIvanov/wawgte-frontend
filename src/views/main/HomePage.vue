<!-- Main.vue -->

<template>
  <div>
    <Header :isLoggedIn="isLoggedIn"/>
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from 'axios';


export default {
  data() {
    return {
      isLoggedIn: true, 
    };
  },

  async created() {
    await this.validateToken();
  },

  methods: {
    async validateToken() {
      try {
        const jwt = getCookie('jwtWawgte');
        const response = await axios.post('https://backend.wawgte.com/jwt', { token: jwt }, {
            headers: {
              'Content-Type': 'application/json',
            },
        });
        const result = response.data;
        if (result.status === 'success') {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      } catch (error) {
          console.error('Token validation failed:', error);
          this.isLoggedIn = false;
      }
    },
  },

  components: {
    Header,
    Footer,
  },
};
</script>