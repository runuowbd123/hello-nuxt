<template>
  <div class="container">
    test中的test
    <nuxt-link to="/test">回test页面</nuxt-link>
    <nuxt-link :to="{name: 'test', params: {id: 123}}">回test页面并且params中带id字段值为123</nuxt-link>
    <div @click="backToIndex" style="cursor: pointer">
      回去index
    </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  head() {
    return {
      title: 'test中的test页',
      meta: [{
      }]
    }
  },
    mounted() {
    this.getDataIn()
  },
  methods: {
    getDataIn() {
      api.getDataIn().then((res) => {
        console.log(res)
      })
    },
    backToIndex() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
