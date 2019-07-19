<template>
  <div class="me">
    <div class="mehead" v-if="showHead">
      <span>个人中心</span>
    </div>
    <div ref="container" class="container">
      <ul>
        <BeforeLogin />
        <MiddleMe />
        <!-- <BotMe/> -->
        <div class="ad">
          <img src="./images/ad.jpg" alt />
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
import BeforeLogin from "./Children/BeforeLogin";
import MiddleMe from "./Children/MiddleMe";
import ShopBlock from "../../components/ShopBlock/ShopBlock";
import { mapState } from "vuex";
import BScroll from "better-scroll";
import { Indicator,Toast } from "mint-ui";
export default {
  name: "me",
  data() {
    return {
      showHead: false,
      satrY: 0,
      startIndex: 1,
      size: 10
    };
  },
  components: {
    BeforeLogin,
    MiddleMe,
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
    // Indicator.open({
    //   text: "正在全力为你加载中...",
    //   spinnerType: "fading-circle"
    // });
    // 通过dispatch执行action中的reqHomeCasual()函数来从后端请求轮播的图片存到state里面
    this.$store.dispatch("reqRecommendShopList", {
      startIndex: this.startIndex,
      size: this.size
      //传递一个函数过去,当action方法请求数据成功以后，执行这个方法来关闭信息面板
      // closeIndicator: function() {
      //   Indicator.close();
      // }
    });
    //不可以写在这里，因为actions里面对应的方法是异步的
    // Indicator.close();
  }
};
</script>

<style lang="stylus" scoped>
.me
  width 100%
  height 100%
  .mehead
    width 100%
    height 50px
    position fixed
    top 0px
    left 0px
    z-index 98
    background-color #fff
    border-bottom 1px solid #BEB9B9
    display flex
    justify-content center
    align-items center
    span
      font-size 17px
  .ad
    width 100%
    height 100px
    // padding 5px 5px
    margin-top 10px
    display flex
    justify-content center
    align-items center
    background-color #fff
    img
      width 97%
      height 90%
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
  .container
    width 100%
    height 100% // 高度固定
    overflow hidden // 超出部分隐藏
    .container-ul
      display flex
      flex-wrap wrap
      // 与底部不重叠
      padding-bottom 50px
</style>
