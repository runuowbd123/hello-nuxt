<template>
  <div class="container">
    <p>
      我是test页面
    </p>
    <p>
      我是vuex中count变量的值: {{this.$store.state.count}}
    </p>
    <br>
    <button @click="indecre">
      vuex的count-1
    </button>
    <br>
    <nuxt-link to="/">回去index页面</nuxt-link>
    <nuxt-link to="/test/test">去test中的test</nuxt-link>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'test页面',
      meta: [{
        hid: 'id',
        name: '大哥',
        content: '111'
      }]
    }
  },
  
  methods: {
    indecre() {
      this.$store.commit('changeCount', this.$store.state.count - 1)
    }
  }
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
