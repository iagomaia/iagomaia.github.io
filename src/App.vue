<script setup>
import Container from "./components/Container.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <container>
    <Header />
  </container>
</template>

<style>
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 1200px;
}
body {
  background: linear-gradient(90deg, #0a0a0a 0%, #5b5b5b 100%);
}
h1 {
  color: #ff9635;
}
</style>
