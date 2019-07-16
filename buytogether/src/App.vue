<template>
  <div id="app">
    <router-view/>
    <TabBar v-show="$route.meta.showTabBar"></TabBar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'App',
  components:{
    TabBar
  },
  mounted() {
    //得到用户信息，实现自动登录
    this.$store.dispatch('requser');
  },
}
</script>

<style lang="stylus" scoped>
@import './common/stylus/mixins.styl'
#app
  width 100%
  height 100%
  background-color $bg 
</style>