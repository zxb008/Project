<template>
  <div class="chat">
    <div class="chatHead"><span>聊天</span></div>
    <div class="container" ref="container">
      <ul>
        <div class="container-guang">
          <div class="mg">
            <img src="./images/discount.png" alt="">
          </div>
          <div class="msg">
            <div class="msgtop">
               <h3>优惠活动通知 <span>官方</span></h3>
               <span>上午11.10</span>
            </div>
            <div class="msgbot">
              <span>清风，开电动车的你不能错过</span>
              <div>2</div>
            </div>
          </div>
        </div>
        <div class="container-guang">
          <div class="mg">
            <img src="./images/pdd.png" alt="">
          </div>
          <div class="msg">
            <div class="msgtop">
               <h3>拼多多官方客服 <span>官方</span></h3>
               <span>上午11.10</span>
            </div>
            <div class="msgbot">
              <span>亲，早上好，多多祝您一天好心情！</span>
            </div>
          </div>
        </div>
        <div class="commend">
          <img src="./images/heart.png" alt />
          <span>精选推荐</span>
        </div>
        <!-- <div ref="container" class="container"> -->
        <ul class="container-ul" v-if="recommendshoplist.length > 0">
          <ShopBlock
            :shop="item"
            :shopIndex="index"
            v-for="(item,index) in recommendshoplist"
            :key="index"
          />
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import ShopBlock from "../../components/ShopBlock/ShopBlock";
import { mapState } from "vuex";
import BScroll from "better-scroll";
import { Indicator, Toast } from "mint-ui";
export default {
  name: "chat",
  data() {
    return {
      satrY: 0,
      startIndex: 1,
      size: 10
    };
  },
  components: {
    ShopBlock
  },
  computed: {
    ...mapState({
      recommendshoplist: state => state.recommendshoplist
    })
  },
  watch: {
    //页面出现数据以后,才能有滚动效果
    recommendshoplist() {
      this.$nextTick(() => {
        //开始的时候，startIndex=1，size=10，把数据recommendshoplist请求过来了
        //当页面的数据recommendshoplist有了变化以后，startIndex增加1，同时初始化页面的滚动
        //initScrolly()里面有个监听事件，一旦触发这个监听事件，数据重新请求，那么数据又会变化，根据监听，那么startIndex又会增加1
        this.startIndex += 1;
        this.initScrolly();
      });
    }
  },
  methods: {
    initScrolly() {
      //让 ref=scroll 这个节点滚动
      this.scroll = new BScroll(this.$refs.container, {
        scrollY: true,
        click: true,

        startY: this.satrY,
        probeType: 3
      });
      //监听触发结束事件，而不是滚动事件
      this.scroll.on("touchEnd", pos => {
        //下拉刷新,往下拉，pos.y是正数
        if (pos.y >= 30) {
          // console.log('下拉刷新');
        }
        //上拉加载，pos.y是负数
        //因为这里是箭头函数，所以this指向当前的上下文环境
        //maxScrollY可滑动的最长距离，负值
        if (pos.y + 30 < this.scroll.maxScrollY) {
          this.satrY = this.scroll.startY;
          Indicator.open({
            text: "正在全力为你加载中...",
            spinnerType: "fading-circle"
          });
          // this.showBot = true;
          this.$store.dispatch("reqRecommendShopList", {
            startIndex: this.startIndex,
            size: this.size,
            closeIndicator: () => {
              // this.showBot = false;
              Indicator.close();
              // console.log('关闭了');
            },
            msg: () => {
              Toast({
                message: "已经加载到底了！",
                position: "middle",
                duration: 1500
              });
            }
          });
        }
      });
      //监听滚动结束事件，滚动结束以后，DOM的节点变化了
      this.scroll.on("scrollEnd", () => {
        //此时maxScrollY需要重新更新
        this.scroll.refresh();
      });
      //监听滚动事件
      this.scroll.on("scroll", pos => {
        if (pos.y < -50) {
          this.showHead = true;
        } else {
          this.showHead = false;
        }
      });
    }
  },
  mounted() {
    this.$store.dispatch("reqRecommendShopList", {
      startIndex: this.startIndex,
      size: this.size
    });
  }
};
</script>

<style lang="stylus" scoped>
.chat
  width 100%
  height 100%
  border 1px solid #fff
  .chatHead
    position fixed
    z-index 98
    left 0px
    top 0px
    width 100%
    height 50px
    display flex
    justify-content center
    align-items center
    border-bottom 0.5px solid #CDC7C7
    background-color #fff
    span
      font-size 17px
  .container
    margin-top 50px
    width 100%
    height 100% // 高度固定
    overflow hidden // 超出部分隐藏
    .container-guang
      width 100%
      height 60px
      background-color #fff
      display flex
      // justify-content center
      align-items center
      .mg
        flex 1.5
        height 100%
        display flex
        justify-content center
        align-items center
        img 
          width 70%
          height 70%
      .msg
        flex 8.5
        height 80%
        // display flex
        // flex-direction column
        // justify-content center
        // align-items center
        .msgtop
          width 100%
          height 24px
          display flex
          justify-content space-between
          align-items center
          h3
            font-size 16px
            span
              border 1px solid #F34848
              color #F34848
              line-height 16px
              font-size 11px
              border-radius 5px
          span
            color #C3BCBC
            margin-right 10px
            font-size 11px
            line-height 16px
        .msgbot
          width 100%
          height 24px
          display flex
          align-items center
          justify-content space-between
          span
            color #C3BCBC
            font-size 13px
            line-height 16px
          div
            width 15px
            height 15px
            margin-right 10px
            text-align center
            line-height 15px
            font-size 12px
            border-radius 50%
            color #fff
            background-color #EC2B2B
      &:first-child
        border-bottom 1px solid #CDC7C7
    .commend
      margin-top 10px
      border-bottom 1px solid #BEB9B9
      width 100%
      height 40px
      display flex
      justify-content center
      align-items center
      background-color #fff
      img
        height 50%
      span
        margin-left 5px
        color #EA5353
    .container-ul
      display flex
      flex-wrap wrap
      // 与底部不重叠
      padding-bottom 50px
</style>
