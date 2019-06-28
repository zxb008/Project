<template>
   <div class="header">
      <div class="header-item1">
        <img src="../assets/images/index/location.png">
      </div>
      <div class="header-search">
        <mt-button>
          <img src="../assets/images/index/search.png" height="20" width="20" slot="icon">
          搜索
        </mt-button>
      </div>
      <div class="header-item2">
        <img src="../assets/images/index/hore.png">
      </div>
      <div class="header-item3">
        <img src="../assets/images/index/msg.png">
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.header
  background-color #1296DB
  width 100%
  height 50px
  display flex
  justify-content space-between
  align-items center
  .header-search
    width 70%
    .mint-button
      width 100%
  .header-item1
    height 30px
    width 30px
    margin-left 5px
    img
      width 100%
      height 100%
  .header-item2
    height 30px
    width 30px
    img
      width 100%
      height 100%
  .header-item3
    height 30px
    width 30px
    margin-right 5px
    img
      width 100%
      height 100%
</style>
