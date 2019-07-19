<template>
  <div class="recommend">
    <mt-header fixed title="推荐"></mt-header>
    <div ref="container" class="container">
      <ul class="container-ul" v-if="recommendshoplist.length > 0">
        <ShopBlock
          :shop="item"
          :shopIndex="index"
          v-for="(item,index) in recommendshoplist"
          :key="index"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShopBlock from "../../components/ShopBlock/ShopBlock";
import BScroll from "better-scroll";
import { Indicator, Toast } from "mint-ui";
export default {
  name: "recommend",
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
        scrollX: false,
        click: true,

        startY: this.satrY, //调用上次加载后底部y轴的位置    ---**重点** starY在data里面初始值设置为0
        probeType: 3

        // pullDownRefresh: {
        //   threshold: 50,
        //   stop:30
        // },
        // pullUpLoad: {
        //   threshold: -30
        // }
      });

      // this.scroll.on("pullingDown", () => {
      //   // this.$store.dispatch("reqRecommendShopList", {
      //   //   startIndex: this.startIndex,
      //   //   size: this.size,
      //   //   closeIndicator: function() {
      //   //   }
      //   // });
      //   console.log('下拉');

      //   this.$nextTick(() => {
      //     this.scroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
      //   });
      //   this.scroll.finishPullDown(); // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
      // });

      // this.scroll.on("pullingUp", () => {

      //   this.satrY = this.scroll.startY; //记录上次加载后底部y轴的位置    ---**重点**
      //   Indicator.open({
      //     text: "",
      //     spinnerType: "fading-circle"
      //   });
      //   this.$store.dispatch("reqRecommendShopList", {
      //     // startIndex: this.startIndex,
      //     size: this.size,
      //     closeIndicator: () => {
      //       Indicator.close();
      //     },
      //     msg: () => {
      //       Toast({
      //         message: "已经加载到底了！",
      //         position: "middle",
      //         duration: 1500
      //       });
      //     }
      //   });
      //   console.log("上拉");
      //   this.$nextTick(() => {
      //     this.scroll.finishPullUp(); // 上拉加载动作完成后调用此方法告诉BScroll完成一次上拉动作
      //     this.scroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
      //   });
      // });

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
    }
  },
  mounted() {
    Indicator.open({
      text: "",
      spinnerType: "fading-circle"
    });
    // 通过dispatch执行action中的reqHomeCasual()函数来从后端请求轮播的图片存到state里面
    this.$store.dispatch("reqRecommendShopList", {
      startIndex: this.startIndex,
      size: this.size,
      //传递一个函数过去,当action方法请求数据成功以后，执行这个方法来关闭信息面板
      closeIndicator: function() {
        Indicator.close();
      }
    });
    //不可以写在这里，因为actions里面对应的方法是异步的
    // Indicator.close();
  }
};
</script>

<style lang="stylus" scoped>
.recommend
  width 100%
  height 100%
  // 与顶部的标题不重叠
  padding-top 2.7rem
  .mint-header
    background-color #FFFFFF
    color #050505
    font-size 16px
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
