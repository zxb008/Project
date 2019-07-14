<template>
  <div class="login">
    <mt-header fixed title="手机登陆" class="loginHead">
      <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="login-container">
      <form>
        <div class="conFirst">
          <label for="phone">手机号码</label>
          <input
            id="phone"
            type="number"
            placeholder="电话号码"
            autofocus="autofocus"
            v-model="phone"
          />
          <div @click="clearPhone">
            <img v-show="showImage" src="./images/clear.png" alt />
          </div>
        </div>
        <div class="conSecond">
          <label for="code">验证码</label>
          <input id="code" type="number" placeholder="验证码" v-model="code" />
          <button
            v-if="showButton"
            :style="showSendCode ? {color:'red'}:{}"
            @click.prevent="sendCode"
          >发送验证码</button>
          <button disabled="disabled" v-else>还剩{{time}}s</button>
        </div>
      </form>
    </div>
    <div class="butt">
      <button>同意协议并登陆</button>
      <span>
        我已经阅读并同意
        <a href="">服务协议与隐私政策</a>
      </span>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  name: "login",
  data() {
    return {
      phone: "",
      code: "",
      showButton:true,//切换显示两个button按钮
      time: 0
    };
  },
  computed: {
    showImage() {
      if (this.phone === "") {
        return false;
      } else {
        return true;
      }
    },
    //验证输入的电话号码是否正确
    showSendCode() {
      return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone);
    }
  },
  methods: {
    clearPhone() {
      this.phone = "";
    },
    sendCode() {
      //输入的号码正确，可以发送验证码
      if (this.showSendCode) {
        //发送验证码，需要一些时间过程
        // if (false) {
        //   //在这个时间段中没有收到
        //   //出现菊花图
        // } else {
          
        // }
        this.showButton = false;
        this.time = 5;
        let timeId = setInterval(() => {
          this.time--;
          if (this.time === 0) {
            clearInterval(timeId);
            this.showButton = true;
          }
        }, 1000);
      }else{
      //输入的号码错误，提示重新输入
      MessageBox('提示', '号码错误，请你重新输入');
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
  width 100%
  height 100%
  .loginHead
    color #000
    font-size 18px
    height 50px
    background-color #fff
  .login-container
    padding-top 60px
    width 100%
    height 100px
    background-color #f5F5F5
    .conFirst
      width 100%
      height 49px
      background-color #fff
      border-bottom 1px solid #BDC2C7
      display flex
      align-items center
      label
        flex 2
        font-size 15px
        text-align center
      input
        flex 7
        // height 100%
        outline none
        border none
      div
        flex 1
        height 100%
        display flex
        align-items center
        justify-content center
        img
          width 30%
          height 25%
    .conSecond
      width 100%
      height 50px
      background-color #fff
      display flex
      align-items center
      label
        flex 2
        font-size 15px
        text-align center
      input
        flex 5
        // height 100%
        outline none
        border none
      button
        flex 3
        height 60%
        border none
        border-left 1px solid #BDC2C7
        background-color #fff
  .butt
    width 100%
    height 100px
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    button
      height 45%
      width 90%
      font-size 18px
      color #ffffff
      border none
      border-radius 8px
      background-color #F1512F
      opacity 0.3
    span
      font-size 12px
      a
        color #3F90D3
        text-decoration-line none
</style>

