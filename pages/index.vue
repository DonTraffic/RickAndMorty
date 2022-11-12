<template>
  <div>
    
    <nuxt-link to="/character">character</nuxt-link>
    <nuxt-link to="/location">location</nuxt-link>
    <nuxt-link to="/errors">errors</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
  *{
    color: azure;
  }
  body{
    background-color: rgba(0, 0, 0, 0.8);
  }
</style>
