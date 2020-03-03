<template>
  <div class="container">
    test中的test
    <nuxt-link to="/test">回test</nuxt-link>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'test中的test页',
      meta: [{
      }]
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
