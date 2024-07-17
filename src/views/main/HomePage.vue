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
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  data() {
    return {
      isLoggedIn: false, 
    };
  },

  async created() {
    await this.validateToken();
  },
  
  methods: {
    async validateToken() {
      try {
        const jwt = getCookie('jwt_token');
        const response = await fetch('https://backend.wawgte.com/jwt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: jwt }),
        });
        const result = await response.json();
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