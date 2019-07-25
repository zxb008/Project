<template>
  <div class="user">
    <div class="user-header">
      <span>25人正在拼单，可直接参与</span>
      <span @click="showScroll">查看更多></span>
    </div>
    <van-popup v-model="show">
      <div class="out">
        <div class="showheader">
          <span>正在拼单</span>
        </div>
        <div class="pindan" v-for="(item,index) in user " :key="index">
          <img :src="item.img" />
          <div class="con">
            <div class="con1">
              <span>{{item.name}}</span>
              <span>还差一人</span>
            </div>
            <div class="con2">
              <span>剩余</span>
              <van-count-down millisecond :time="30*60*60*1000" format="HH:mm:ss:SSS" />
            </div>
          </div>
          <button>去拼单</button>
        </div>
      </div>
    </van-popup>
    <div class="user-scroll">
      <van-swipe :autoplay="1000" :show-indicators="false" style="height: 120px;" vertical>
        <van-swipe-item>
          <div class="item">
            <div class="itemleft">
              <img src="../images/user1.jpg" alt />
              <span>~渡情</span>
            </div>
            <div class="itemright">
              <div class="time">
                <span>
                  还剩
                  <i>1人</i>拼成
                </span>
                <div class="time-bot">
                  <span>剩余</span>
                  <van-count-down millisecond :time="30*60*60*1000" format="HH:mm:ss:SSS" />
                </div>
              </div>
              <button>去拼单</button>
            </div>
          </div>
          <div class="item">
            <div class="itemleft">
              <img src="../images/user2.jpg" alt />
              <span>白衣居士</span>
            </div>
            <div class="itemright">
              <div class="time">
                <span>
                  还剩
                  <i>1人</i>拼成
                </span>
                <div class="time-bot">
                  <span>剩余</span>
                  <van-count-down millisecond :time="30*60*60*1000" format="HH:mm:ss:SSS" />
                </div>
              </div>
              <button>去拼单</button>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="item">
            <div class="itemleft">
              <img src="../images/user3.jpg" alt />
              <span>开心就好</span>
            </div>
            <div class="itemright">
              <div class="time">
                <span>
                  还剩
                  <i>1人</i>拼成
                </span>
                <div class="time-bot">
                  <span>剩余</span>
                  <van-count-down millisecond :time="30*60*60*1000" format="HH:mm:ss:SSS" />
                </div>
              </div>
              <button>去拼单</button>
            </div>
          </div>
          <div class="item">
            <div class="itemleft">
              <img src="../images/user4.jpg" alt />
              <span>清风咋起</span>
            </div>
            <div class="itemright">
              <div class="time">
                <span>
                  还剩
                  <i>1人</i>拼成
                </span>
                <div class="time-bot">
                  <span>剩余</span>
                  <van-count-down millisecond :time="30*60*60*1000" format="HH:mm:ss:SSS" />
                </div>
              </div>
              <button>去拼单</button>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="item">
            <div class="itemleft">
              <img src="../images/user5.jpg" alt />
              <span>clam</span>
            </div>
            <div class="itemright">
              <div class="time">
                <span>
                  还剩
                  <i>1人</i>拼成
                </span>
                <div class="time-bot">
                  <span>剩余</span>
                  <van-count-down millisecond :time="30*60*60*1000" format="HH:mm:ss:SSS" />
                </div>
              </div>
              <button>去拼单</button>
            </div>
          </div>
          <div class="item">
            <div class="itemleft">
              <img src="../images/user6.jpg" alt />
              <span>我已无暇顾及过去</span>
            </div>
            <div class="itemright">
              <div class="time">
                <span>
                  还剩
                  <i>1人</i>拼成
                </span>
                <div class="time-bot">
                  <span>剩余</span>
                  <van-count-down millisecond :time="30*60*60*1000" format="HH:mm:ss:SSS" />
                </div>
              </div>
              <button>去拼单</button>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shop"],
  data() {
    return {
      show: false,
      user: [
        { img: require("../images/user1.jpg"), name: "~渡情" },
        { img: require("../images/user2.jpg"), name: "白衣居士" },
        { img: require("../images/user3.jpg"), name: "开心就好" },
        { img: require("../images/user4.jpg"), name: "清风咋起" },
        { img: require("../images/user5.jpg"), name: "clam" },
        { img: require("../images/user6.jpg"), name: "星辰" }
      ]
    };
  },
  methods: {
    showScroll() {
      this.show = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
.user
  width 100%
  height 150px
  background-color #fff
  margin-top 12px
  .user-header
    width 100%
    height 30px
    border-bottom 1px solid #CAC8C8
    display flex
    align-items center
    justify-content space-between
    span
      font-size 14px
      color #A7A6A6
    span:first-child
      margin-left 15px
    span:last-child
      margin-right 15px
  .out
    border-radius 5px
    .showheader
      width 300px
      height 50px
      border-bottom 1px solid #CAC8C8
      display flex
      align-items center
      justify-content center
      font-size 15px
    .pindan
      width 300px
      height 50px
      border-bottom 1px solid #CAC8C8
      display flex
      align-items center
      justify-content space-around
      img
        height 70%
        width 12%
        border-radius 50%
      .con
        height 100%
        width 60%
        .con1
          width 100%
          height 50%
          display flex
          align-items center
          // justify-content space-around
          span
            margin-left 10px
          span:first-child
            font-size 15px
          span:last-child
            font-size 13px
            // color #A7A6A6
      .con2
        width 100%
        height 50%
        display flex
        align-items center
        color #A7A6A6
        font-size 13px
        
      button
        width 20%
        height 60%
        font-size 14px
        background-color #F72929
        border-radius 2px
        color #fff
        border none
  .user-scroll
    width 100%
    height 120px
    .item
      width 100%
      height 60px
      display flex
      .itemleft
        height 100%
        flex 1
        display flex
        align-items center
        img
          margin-left 10px
          height 65%
          border-radius 50%
        span
          margin-left 10px
          font-size 15px
      .itemright
        height 100%
        flex 1
        display flex
        align-items center
        justify-content space-around
        .time
          width 60%
          display flex
          align-items center
          justify-content center
          flex-direction column
          span
            font-size 14px
            i
              color #F72929
          .time-bot
            display flex
            align-items center
            justify-content center
        button
          width 30%
          height 50%
          font-size 14px
          background-color #F72929
          border-radius 2px
          color #fff
          border none
</style>
