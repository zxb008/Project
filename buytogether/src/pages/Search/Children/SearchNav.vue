<template>
  <div class="searchnav">
    <div class="searchnav-top">
      <span>寻找</span>
      <img src="../images/share.png" alt="">
    </div>
    <div class="searchnav-bot">
      <mt-button>
          <img src="../images/search.png" height="20" width="20" slot="icon" />
          ins风发夹
      </mt-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
 @import "../../../common/stylus/mixins.styl"
.searchnav
  border-bottom-1px(#ccc)
  width 100%
  height 90px
  position fixed
  z-index 98
  background-color #FFFFFF
  top 0px
  left 0px
  .searchnav-top
    width 100%
    height 50%
    font-family serif
    display flex
    align-items center
    span
      flex 9.5
      line-height 25px
      font-size 16px
      text-align center
    img
      height 25px
      flex 0.6
      margin-right 2.5%
  .searchnav-bot
    width 100%
    height 40%
    display flex
    align-items center
    justify-content center
    button
      width 95%
</style>
