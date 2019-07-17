<template>
  <div class="setting">
    <div class="settingHead">
      <router-link to="/me" tag="div" class="head-back">
        <img src="./images/back.png" alt />
      </router-link>
      <div class="head-text">
        <span>设置</span>
      </div>
    </div>
    <div class="container-top">
      <mt-cell title="免密支付设置" to="/setting" is-link>
        <img slot="icon" src="./images/key.png" width="24" height="24" />
      </mt-cell>
      <mt-cell title="免拼设置" to="/setting" is-link value="还剩0次免拼机会">
        <img slot="icon" src="./images/untogger.png" width="24" height="24" />
      </mt-cell>
      <mt-cell title="消息接收设置" to="/setting" is-link>
        <img slot="icon" src="./images/msg.png" width="24" height="24" />
      </mt-cell>
    </div>
    <div class="container">
      <mt-cell title="常见问题" to="/setting" is-link>
        <img slot="icon" src="./images/problem.png" width="24" height="24" />
      </mt-cell>
      <mt-cell title="意见反馈" to="/setting" is-link>
        <img slot="icon" src="./images/suggestion.png" width="24" height="24" />
      </mt-cell>
    </div>
    <div class="container">
      <mt-cell title="商家免费入驻" to="/setting" is-link>
        <img slot="icon" src="./images/business.png" width="24" height="24" />
      </mt-cell>
      <mt-cell title="清除缓存" to="/setting" is-link>
        <img slot="icon" src="./images/clear.png" width="24" height="24" />
      </mt-cell>
      <mt-cell title="关于拼多多" to="/setting" is-link>
        <img slot="icon" src="./images/about.png" width="24" height="24" />
      </mt-cell>
    </div>
    <button @click="logout" class="setting-bot">退出登录</button>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import { Toast, MessageBox } from "mint-ui";
export default {
  name: "setting",
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    if (!this.user.id) {
      this.$router.replace("/login");
      Toast({
        message: "请先登录",
        position: "middle",
        duration: 2000
      });
    }
  },
  methods: {
    ...mapActions(['reqlogout']),
    logout() {
      MessageBox.confirm("是否确认退出登录?")
        .then(action => {
          if ("confirm" === action) {
            // this.$store.dispatch('reqlogout')
            this.reqlogout();
            // 回到主界面
            this.$router.replace("/me");
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          this.$router.replace("/setting");
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.setting
  width 100%
  height 100%
  border-top 1px solid #fff // 防止内边距塌陷
  .settingHead
    position fixed
    top 0px
    left 0px
    width 100%
    height 50px
    background-color #fff
    display flex
    .head-back
      flex 1
      height 100%
      display flex
      align-items center
      justify-content center
      img
        width 50%
        height 50%
    .head-text
      flex 9
      height 100%
      display flex
      align-items center
      justify-content center
      span
      font-size 16px
      // font-weight 600
  .container-top
    width 100%
    // height 80px
    background-color #fff
    margin-top 60px
  .container
    margin-top 10px
    width 100%
    // height 80px
    background-color #fff
  .setting-bot
    margin-top 10px
    width 100%
    height 40px
    background-color #fff
    border none
    font-size 16px
    // font-weight 600
</style>

