<template>
  <div class="user">
    <div class="userHead">
      <div @click.prevent="back" class="head-back">
        <img src="./images/back.png" alt />
      </div>
      <div class="head-text">
        <span>我的资料</span>
      </div>
    </div>
    <div class="container">
      <div class="user-icon">
        <span>头像</span>
        <img src="./images/new.png" alt />
      </div>
      <div class="user-item">
        <span>手机</span>
        <span>{{user.user_phone | phoneFilter }}</span>
      </div>
      <div class="user-item">
        <span>昵称</span>
        <span>
          <input type="text" />
        </span>
      </div>
      <div class="user-item" @click="showActionsheet">
        <span>性别</span>
        <span>{{user_sex}}</span>
      </div>
      <div class="user-item">
        <span>常住地</span>
        <span>
          <input type="text" />
        </span>
      </div>
      <div class="user-item" @click="$refs.picker.open()">
        <span>生日</span>
        <span>{{user_birthday}}</span>
      </div>
      <div class="user-item">
        <span>个性签名</span>
        <span>
          <input type="text" />
        </span>
      </div>
    </div>
    <!-- 性别 -->
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <!-- 生日 -->
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="getBirthday"
    ></mt-datetime-picker>
    <div class="bott">
      <span>我的带货动态</span>
    </div>
  </div>
</template>

<script>
 import moment from 'moment';//处理时间格式的第三方库
import { mapState } from "vuex";
export default {
  name: "user",
  data() {
    return {
      user_sex: "未填写>",
      user_birthday: "未填写>",
      //性别选择
      sheetVisible: false,
      actions: [
        {
          name: "男",
          method: this.selectManOrWoman // 调用methods中的函数
        },
        {
          name: "女",
          method: this.selectManOrWoman // 调用methods中的函数
        }
      ],
      //生日日期
      // pickerVisible: false,
      startDate: new Date("1949-10-01"),
      endDate: new Date("2016-10-01")
    };
  },
  computed: {
    ...mapState(["user"])
  },
  filters: {
    phoneFilter(phone) {
      if (!phone) return "";
      let phoneArr = phone.split("");
      for (let i = 3; i < 7; i++) {
        phoneArr[i] = "*";
      }
      return phoneArr.join("");
    }
  },
  methods: {
    back() {
      //更新信息
      this.$router.replace("/me");
    },
    //是否显示actionsheet
    showActionsheet() {
      this.sheetVisible = true;
    },
    selectManOrWoman(props) {
      this.sex = props.name;
      // this.sheetVisible = false;
    },
    //确定按钮，把选择的生日日期赋值给属性
    getBirthday(data) {
      this.user_birthday = moment(data).format("YYYY年MM月DD日");
    }
  }
};
</script>

<style lang='stylus' scoped>
.user
  width 100%
  height 100%
  border-top 1px solid #fff // 防止内边距塌陷
  .userHead
    position fixed
    top 0px
    left 0px
    width 100%
    height 50px
    background-color #fff
    display flex
    border-bottom 1px solid #CDCBCB
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
  .container
    width 100%
    // height 200px
    background-color #fff
    margin-top 50px
    .user-icon
      height 60px
      padding 0 10px
      background-color #fff
      border-bottom 1px solid #e0e0e0
      display flex
      justify-content space-between
      align-items center
      img
        width 50px
        border-radius 50%
    .user-item
      height 40px
      padding 0 10px
      background-color #fff
      border-bottom 1px solid #e0e0e0
      display flex
      justify-content space-between
      align-items center
      input
        border none
        outline none
        text-align right
    button
      width 90%
      height 40px
      line-height 40px
      background-color #e9232c
      text-align center
      margin 20px 5%
      border none
      font-size 16px
      color #fff
      border-radius 10px
  .bott
    width 100%
    // height 200px
    background-color #fff
    margin-top 10px
    display flex
    align-items center
    // justify-content center
    span
      line-height 40px
      font-size 16px
</style>

