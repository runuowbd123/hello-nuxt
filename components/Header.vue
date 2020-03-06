<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/">index</el-menu-item>
    <el-submenu index="/test">
        <template slot="title">test</template>
        <el-menu-item index="/test">test主页</el-menu-item>
        <el-menu-item index="/test/test">test中的test</el-menu-item>
    </el-submenu>
    <el-menu-item index="/tvShow">tvShow</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  mounted() {
      console.log('111111111')
  },
  beforeUpdate() {
      console.log('bbbbbbbbbbbbbbbbbb')
  },
  watch:{
        $route(to,from){
            console.log(to.path);
            this.activeIndex2 = to.path
        }
    },
  data() {
      return {
        activeIndex2: '/'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath, this.$route.path);
        this.$router.push(key)
      }
    }
}
</script>

<style>


</style>
 