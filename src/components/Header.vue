<!-- Header.vue -->
<template>
  <div class="header">
      <h1>{{ title }}</h1>
  </div>
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
  padding: 30px;
  text-align: center;
  border-radius: 20px;
  width: 100%;
}
h1 {
  margin: 0;
}
</style>
