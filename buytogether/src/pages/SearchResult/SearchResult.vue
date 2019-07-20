<template>
  <div class="searchresult">
    <HeadResult/>
  </div>
</template>

<script>
import HeadResult from './Children/HeadResult'
export default {
  name: "searchresult",
  components:{
    HeadResult
  }
};
</script>

<style lang="stylus" scoped>
.searchresult
  width 100%
  height 100%
</style>
