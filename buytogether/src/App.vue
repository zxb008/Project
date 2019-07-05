<template>
  <div id="app">
    <router-view/>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar/TabBar'
export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>

<style lang="stylus" scoped>
@import './common/stylus/mixins.styl'
#app
  width 100%
  height 100%
  background-color $bg 
</style>