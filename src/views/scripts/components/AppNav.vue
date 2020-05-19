<template>
  <nav>
    <ul>
      <li v-for="navItem in navItems" v-bind:item="navItem" v-bind:key="navItem.id">
        <a :href="navItem.href">{{ navItem.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  data: function() {
    return {
      navItems: [
        {
          id: 1,
          href: '/',
          title: 'Test A'
        },
        {
          id: 2,
          href: '#',
          title: 'Test B'
        }
      ]
    }
  }
}
</script>

<style scoped>
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(24px, 2rem, 48px);
  }
</style>