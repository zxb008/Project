<template>
  <div class="beforelogin">
    <div class="tou">
      <img v-if="user.id" src="../images/new.png" alt />
      <img v-else src="../images/tou.png" alt />
    </div>
    <div class="bot">
      <div class="bot-login-out" v-if="user.id">
        <div class="bot-login">
          <span>{{user.user_phone  | phoneFilter }}</span>
          <img src="../images/phone.png" alt />
        </div>
        <div><span>勋章墙></span></div>
      </div>

      <router-link v-else tag="button" to="/login">点击登陆</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"])
  },
  filters:{
    phoneFilter (phone) {

       if (!phone) return ''
      let phoneArr = phone.split('')
      for (let i = 3; i < 7; i++) {
        phoneArr[i] = '*';
      }
      return phoneArr.join('')
    }
  }
};
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
    .bot-login-out
      width 45%
      height 60%
      .bot-login
        height 65%
        width 100%
        display flex
        align-items center
        justify-content flex-start
        span
          font-weight 700
          color #0C0C0C
        img
          height 60%
      div  
        height 35%
        width 100%
        font-size 13px
        color #D3CFCF
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

