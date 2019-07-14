<template>
  <div class="beforelogin">
    <div class="tou">
      <img src="../images/tou.png" alt="">
    </div>
    <div class="bot">
      <router-link tag="button" to="/login">点击登陆</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.beforelogin
  width 100%
  height 80px
  background-color #fff
  display flex
  align-items center
  .tou
    height 100%
    flex 3
    display flex
    align-items center
    justify-content center
    img
      width 66px
      height 66px
      border-radius 50%
  .bot
    height 100%
    flex 7
    display flex
    align-items center
    button
      font-weight 700
      color #EB4848
      border solid 1px #EB4848
      background-color #fff
      width 40%
      height 40%
      border-radius 10px
</style>

