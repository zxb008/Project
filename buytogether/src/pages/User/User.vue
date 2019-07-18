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
      <div class="user-item" @click.prevent="resetName">
        <span>昵称</span>
        <span>{{user.user_name | nameFilter }} ></span>
      </div>

      <div class="user-item" @click="showActionsheet">
        <span>性别</span>
        <span>{{user.user_sex}} ></span>
      </div>
      <div class="user-item" @click.prevent="showPopup">
        <span>常住地</span>
        <span>{{user.user_address}} ></span>
      </div>
      <div class="user-item" @click="$refs.picker.open()">
        <span>生日</span>
        <span>{{user.user_birthday}} ></span>
      </div>
      <div class="user-item" @click.prevent="resetSign">
        {{user.user_sign}}>
        <span>个性签名</span>
        <span></span>
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
    <!-- 常驻地 -->
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      popup-transition="popup-fade"
      class="popup"
    >
      <div class="popup-toolbar">
        <span @click="cancleaddress">取消</span>
        <span @click="selectaddress">确定</span>
      </div>
      <mt-picker  class="popup-picker"  :slots="slots" @change="onValuesChange" ></mt-picker>
    </mt-popup>

    <div class="bott">
      <span>我的带货动态</span>
    </div>
  </div>
</template>

<script>
import address from './data/address.json'
import { Indicator, MessageBox } from "mint-ui";
import moment from "moment"; //处理时间格式的第三方库
import { mapState } from "vuex";
export default {
  name: "user",
  data() {
    return {
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
      endDate: new Date("2016-10-01"),
      //常驻地
      province:'',
      city:'',
      area:'',
      popupVisible: false,
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: 'slot2'
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(()=>{
      //初始化省份数据
      this.slots[0].values = Object.keys(address);
    })
  },
  computed: {
    ...mapState(["user"])
  },
  filters: {
    nameFilter(name) {
      if (!name) return "";
      let bool = /^[1][3,4,5,7,8][0-9]{9}$/.test(name); //判断昵称是电话号码形式还是重新设置了
      if (bool) {
        let nameArr = name.split("");
        for (let i = 3; i < 7; i++) {
          nameArr[i] = "*";
        }
        return nameArr.join("");
      } else {
        return name;
      }
    }
  },
  methods: {
    back() {
      this.$router.replace("/me");
    },
    resetName() {
      MessageBox.prompt("请输入昵称")
        .then(({ value, action }) => {
          if (action === "confirm") {
            Indicator.open("");
            this.$store.dispatch("reqResetUser", {
              user_name: value,
              callback: () => {
                Indicator.close("");
              }
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
            this.$router.replace("/user");
          }
        });
    },
    resetSign() {
      MessageBox.prompt("请输入个性签名")
        .then(({ value, action }) => {
          if (action === "confirm") {
            Indicator.open("");
            this.$store.dispatch("reqResetUser", {
              user_sign: value,
              callback: () => {
                Indicator.close("");
              }
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
            this.$router.replace("/user");
          }
        });
    },
    //是否显示actionsheet
    showActionsheet() {
      this.sheetVisible = true;
    },
    selectManOrWoman(props) {
      //调用接口更新数据库和vuex中用户的信息
      Indicator.open("");
      this.$store.dispatch("reqResetUser", {
        user_sex: props.name,
        callback: () => {
          Indicator.close("");
        }
      });
    },
    //确定按钮，把选择的生日日期赋值给属性
    getBirthday(props) {
      let date = moment(props).format("YYYY年MM月DD日");
      Indicator.open("");
      this.$store.dispatch("reqResetUser", {
        user_birthday: date,
        callback: () => {
          Indicator.close("");
        }
      });
    },
    //常驻地
    showPopup() {
      this.popupVisible = true;
    },
    onValuesChange(picker, values) {
       //1.获取当前选择的省份
      this.province = values[0];

      //2.获取当前省份对应的所有城市
      let cities = Object.keys(address[values[0]]);
      setSlotValues(1, cities)
      //获取当前选择的城市
      this.city = values[1];

      //3.获取多有当前城市所对应的的区或者县
      let areas = address[values[0]][values[1]];
      setSlotValues(2, areas)
      //获取当前选择的地区
      this.area = values[2];

    },
    cancleaddress () {
      this.popupVisible = false;
    },
    selectaddress () {
      
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
      span
        &:last-child
          opacity 0.5
          font-size 15px
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
  .popup
    width 100%
    // height 让子元素撑起来
    .popup-toolbar
      width 100%
      height 40px
      background-color #fff
      display flex
      align-items center
      justify-content space-between
      span
        color #5A7FEB
      span:first-child
        margin-left 20px
      span:last-child
        margin-right 20px
    .popup-picker
      width 100%
      // height 让子元素撑起来
      background-color #F5F5F5 
</style>

