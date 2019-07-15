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
          <input id="phone" type="number" placeholder="电话号码" autofocus="autofocus" v-model="phone" />
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
      <button @click.prevent="login" :style=" showSendCode&&showLogin ? {opacity:1}:{}">同意协议并登陆</button>
      <span>
        我已经阅读并同意
        <a href>服务协议与隐私政策</a>
      </span>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { MessageBox } from "mint-ui";
import { Indicator } from "mint-ui";
import { Toast } from "mint-ui";
import { getSendCode, loginCode } from "../../api/index"; //获取验证码的接口
export default {
  name: "login",
  data() {
    return {
      phone: "",
      code: "",
      showButton: true, //切换显示两个button按钮
      time: 0,
      userInfo: {} //用户信息
    };
  },
  computed: {
    ...mapActions(['setUser']),//vuex里面存入用户信息
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
    },
    showLogin() {
      return /^[0-9]{6}$/.test(this.code);
    }
  },
  methods: {

    clearPhone() {
      this.phone = "";
    },
    //这个方法应该是异步的，因为这个方法里面需要去服务端获取验证码，验证码这个并没有放在vuex的状态管理中
    async sendCode() {
      //输入的号码正确，可以发送验证码
      if (this.showSendCode) {
        this.showButton = false;
        this.time = 60;
        let timeId = setInterval(() => {
          this.time--;
          if (this.time === 0) {
            clearInterval(timeId);
            this.showButton = true;
          }
        }, 1000);
        Indicator.open();
        //这里为了显示效果，服务器已经设置了延迟5秒发送验证码，
        let result = await getSendCode({ phone: this.phone });//请求验证码接口
        Indicator.close();

        if (result.err_code && result.err_code === 0) {
          // 获取验证码失败，在服务端设置了发送验证码一定是成功的，所以这一步是不会执行的
          Toast({
            message: result.message,
            position: "middle",
            duration: 3000
          });
        } else {
          MessageBox("验证码", result.message);
        }
      } else {
        //输入的号码错误，提示重新输入
        Toast({
          message: "号码格式错误，请你重新输入",
          position: "middle",
          duration: 3000
        });
      }
    },
    async login() {
      //验证电话号码
      if (!this.phone) {
        Toast("请输入手机号码!");
        return;
      } else if (!this.showSendCode) {
        Toast("请输入正确格式的手机号码!");
        return;
      }
      //验证验证码
      if (!this.code) {
        Toast("请输入短信验证码!");
        return;
      } else if (!this.showLogin) {
        Toast("短信验证码格式不正确!");
        return;
      }

      let result = await loginCode({ phone: this.phone, code: this.code });//登陆验证接口
      // res.json({
      //   success_code: 200,
      //   message: {
      //     id: results[0].id,
      //     user_name: results[0].user_name,
      //     user_phone: results[0].user_phone
      //   }
      // });

     //判断是否登录成功
      if (result.success_code === 200) {
        //得到用户信息
        this.userInfo = result.message;
       //把用户的信息放入vuex里面，因为其他页面也要使用用户信息
      //this.$store.dispatch('setUser',this.userInfo)
      this.setUser(this.userInfo)
      
        Indicator.open();
        //这里为了显示效果，设置延迟两秒登录，
        setTimeout(() => {
          Indicator.close();
          // this.$router.replace("/me");
           this.$router.back();
        }, 2000);
      } else {
        Indicator.open();
        //这里为了显示效果，设置延迟两秒，
        setTimeout(() => {
          Indicator.close();
         Toast("登陆失败, 手机号或验证不正确");
        }, 2000);
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

