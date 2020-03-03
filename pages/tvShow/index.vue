<template>
  <div class="container">
    <p>
      我是tvShow页面
    </p>
    <nuxt-link to="/">回去index页面</nuxt-link>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  async asyncData({params}) {
    console.log(params)
        const { data } = await api.getData()
        return {
            tvShow: data
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
