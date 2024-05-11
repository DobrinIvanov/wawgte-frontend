<!-- Header.vue -->
<template>
  <header class="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'What Are We Going To Eat ?'
    };
  }
};
</script>

<style scoped>
/* Add CSS styles here */
.header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 0;
}
</style>

