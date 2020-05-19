<template>
  <div id='app'>
    <app-nav></app-nav>
    <h1>{{ heading1 }}</h1>
  </div>
</template>

<script>
import AppNav from './AppNav.vue';

export default {
  data: function() {
    return { heading1: 'Heading Level 1' }
  },
  components: { AppNav }
}
</script>

<style scoped>
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(24px, 2rem, 48px);
  }
</style>