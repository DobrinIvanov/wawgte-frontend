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
import VueCookies from 'vue-cookies';


export default {
  data() {
    return { 
      isLoggedIn: true,
      currentUser: {
        email: '',
      }
    };
  },

  async created() {
    await this.validateToken();
  },
// REQUIRES DEBUGGING
  methods: {
    async validateToken(jwtoken) {
      try {
        const jwtWawgte = this.$cookies.get('jwtWawgte');
        //DEBUGGING
        console.log('Cookie if found: ',jwtWawgte);
        if (!jwtWawgte) {
          this.isLoggedIn = false;
          //DEBUGGING
          console.log('This means no jwtWawgte was obtained(cookie)');
          return;
        }
        const response = axios.post('https://backend.wawgte.com/jwt', { token: jwtWawgte });
        const result = response.data;
        //DEBUGGING
        console.log('response.data: ', result)
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