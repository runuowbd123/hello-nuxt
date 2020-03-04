<template>
  <div class="container">
    <p>
      我是tvShow页面
    </p>
    <nuxt-link to="/">回去index页面</nuxt-link>
    <div class="tv">
      <div class="tv1">
        <div class="title">
          这是从vuex的store中取出的tvshow渲染的，在index页面通过fetch获取到的
        </div>
        <div v-for="(item, index) in this.$store.state.tvShow" :key="index" class="shows">
            节目 {{index + 1}}.{{item.show.name}}
            <br>
            评分：{{item.show.name}}{{'  '}}语言：{{item.show.language}}
            <br>
            链接： <a :href="item.show.url" target="_blank">
                {{item.show.url}}
            </a>
        </div>
      </div>
      <div >
        <div class="title">
          这是本页面通过asyncData中请求接口获取到的tvshow渲染的
        </div>
        <div v-for="(item, index) in tvShow" :key="index" class="shows">
            节目 {{index + 1}}.{{item.show.name}}
            <br>
            评分：{{item.show.name}}{{'  '}}语言：{{item.show.language}}
            <br>
            链接： <a :href="item.show.url" target="_blank">
                {{item.show.url}}
            </a>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shows{
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  width: 400px
}
.tv{
  display: flex
}
.title{
  color: green;
  margin: 20px 0
  }
.tv1{
  margin-right: 40px;
  .title{
  color: red;
  margin: 20px 0
  }
}



</style>
