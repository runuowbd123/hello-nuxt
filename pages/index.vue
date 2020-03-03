<template>
  <div class="container">
    <div>
      <logo />
      <p>
        vuex中的变量count：{{this.$store.state.count}} 
      </p>
      <button @click="add">+1</button>
      <p>
        {{word}}
      </p>
      <nuxt-link :to="{name: 'test', params: {id: 123}}">去test页面</nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import api from '../api/index'

export default {
  head() {
    return {
      title: '首页11',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'dage'
      }]
    }
  },
  components: {
    Logo
  },
  data() {
    return {
        word: '',
      }
  },
  mounted() {
    console.log(this.tvShow)
    this.changeWord()
  },
  methods: {
    changeWord() {
      this.word = '你好我是nuxt！'
    },
    add() {
      this.$store.commit('changeCount', this.$store.state.count + 1)
    }
   
  },
  watch: {
    '$route': function() {
      console.log('$route has changed.')
      this.getData()
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
