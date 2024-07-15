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
      
    },
  },

  components: {
    Header,
    Footer,
  },
};
</script>