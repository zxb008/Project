<template>
  <div class="searchresult">
    <div class="headresult" ref="headresult">
      <HeadResult :value="value" />
    </div>
    <div ref="container" class="container">
      <ul>
        <div class="bot-header" ref="containerHeader">
          <ContainerHeader/>
        </div>
        <ul class="container-ul" v-if="recommendshoplist.length > 0">
          <ShopBlock
            :shop="item"
            :shopIndex="index"
            v-for="(item,index) in recommendshoplist"
            :key="index"
          />
        </ul>
        <div v-else class="container-no">
          <img src="./images/noFind.png" alt="">
          <span>没有找到你搜索的商品</span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import ContainerHeader from './Children/ContainerHeader'
import ShopBlock from "../../components/ShopBlock/ShopBlock";
import { mapState } from "vuex";
import BScroll from "better-scroll";
import { Indicator, Toast } from "mint-ui";
import HeadResult from "./Children/HeadResult";
export default {
  name: "searchresult",
  data() {
    return {
      value: "",
      satrY: 0,
      startIndex: 1,
      size: 10
    };
  },
  components: {
    HeadResult,
    ContainerHeader,
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
        if (pos.y > -50) {
        //  this.$refs.headresult.style.position = 'absolute';
        //  this.$refs.headresult.style.left = '0px';
        //  this.$refs.headresult.style.top = `${pos.y}px`
        } else  {
          
        }

      });
    }
  },
  created() {
    this.value = this.$route.query.value;
     this.$store.dispatch("reqRecommendShopList", {
      startIndex: this.startIndex,
      size: this.size
    });
  }
};
</script>

<style lang="stylus" scoped>
.searchresult
  width 100%
  height 100%
  position relative
  .headresult
    width 100%
    height 50px
  .container
    width 100%
    height 100%
    overflow hidden
    .bot-header
      width 100%
      height 45px
      margin-top 3px
      background-color #fff
    .container-ul
      margin-top 3px
      display flex
      flex-wrap wrap
      // 与底部不重叠
      padding-bottom 50px
    .container-no
      width 100%
      height 400px
      background-color #F5F5F5
      display flex
      flex-direction column
      justify-content center
      align-items center
      img
        width 25%
        height 20%
      span
        color #BBB6B6
        margin-top 20px
</style>
