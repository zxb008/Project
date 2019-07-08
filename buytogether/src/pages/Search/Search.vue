<template>
  <div class="search">
    <SearchNav/>
  </div>
</template>

<script>
import SearchNav from './Children/SearchNav'
export default {
 name:'search',
 components:{
   SearchNav
 }
}
</script>

<style lang="stylus" scoped>
.search
  width 100%
  height 100%
  // 与顶部的标题不重叠
  padding-top 5.4rem
</style>
