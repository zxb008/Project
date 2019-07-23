<template>
  <div class="cart">
    <div class="carthead" v-if="showHead">
      <div @click="back" class="carthead-left item">
        <img src="./images/backed.png" alt />
      </div>
      <div class="carthead-right item">
        <img src="./images/mored.png" alt />
      </div>
    </div>
    <img @click="back" class="headleft headimg" src="./images/back.png" alt />
    <img class="headright headimg" src="./images/more.png" alt />
    <div class="wrap">
      <ul>
        <div class="wrap-img">
          <van-swipe :loop="false" :show-indicators="false" @change="onChange">
            <!-- <van-swipe-item v-for="(image, index) in shop." :key="index">
              <img v-lazy="image" />
            </van-swipe-item>-->
            <van-swipe-item @click="onClick" @touchstart="handleStart" @touchend="handleEnd">
              <img :src="shop.thumb_url" alt width="100%" height="300px" />
            </van-swipe-item>
            <van-swipe-item @click="onClick" @touchstart="handleStart" @touchend="handleEnd">
              <img :src="shop.hd_thumb_url" alt width="100%" height="300px" />
            </van-swipe-item>
            <van-swipe-item @click="onClick" @touchstart="handleStart" @touchend="handleEnd">
              <img :src="shop.image_url" alt width="100%" height="300px" />
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/3</div>
          </van-swipe>
        </div>
        <Title :shop="shop"/>
        <User  :shop="shop"/>
        <div class="wrap-comment"></div>
        <div class="wrap-store"></div>
        <div class="wrap-msg"></div>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from './Children/Title'
import User from './Children/User'
import { ImagePreview } from "vant";
export default {
  name: "cart",
  data() {
    return {
      current: 0,
      shop: {},
      showHead: false
    };
  },
  components:{
    Title,
    User
  },
  mounted() {
    this.shop = this.$route.query.shop;
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    onChange(index) {
      this.current = index;
    },
    onClick(event) {
      if (
        Math.abs(this.nowPoint.x - this.startPoint.x) < 5 &&
        Math.abs(this.nowPoint.y - this.startPoint.y) < 5
      ) {
        ImagePreview({
          images: [
            this.shop.thumb_url,
            this.shop.hd_thumb_url,
            this.shop.image_url
          ]
        });
      }
    },
    handleStart(e) {
      this.startPoint = {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      };
    },
    handleEnd(e) {
      this.nowPoint = {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.cart
  width 100%
  height 100%
  .carthead
    width 100%
    height 50px
    position fixed
    display flex
    justify-content space-between
    align-items center
    background-color #fff
    .item
      width 10%
      height 100%
      display flex
      justify-content center
      align-items center
      img
        height 70%
        width 70%
    .carthead-left
      margin-left 15px
    .carthead-right
      margin-right 15px
  .headimg
    position fixed
    width 30px
    height 30px
    top 20px
    background-color #6E7072
    opacity 0.5
    border-radius 50%
    z-index 98
  .headleft
    left 15px
  .headright
    right 15px
  .wrap
    height 100%
    width 100%
    // overflow hidden
    .wrap-img
      width 100%
      // height 让子元素撑开
      position relative
      .custom-indicator
        position absolute
        bottom 10px
        right 10px
        color #fff
    // .wrap-title
    //   width 100%
    //   height 120px
    //   background-color #fff
    // .wrap-user
    //   margin-top 15px
    //   width 100%
    //   height 100px
    //   border 1px solid #fff
    //   background-color #fff
    // .wrap-comment
    //   margin-top 15px
    //   width 100%
    //   height 150px
    //   border 1px solid #fff
    //   background-color #fff
    // .wrap-store
    //   margin-top 15px
    //   width 100%
    //   height 50px
    //   border 1px solid #fff
    //   background-color #fff
    // .wrap-msg
    //   margin-top 15px
    //   width 100%
    //   height 500px
    //   border 1px solid #fff
    //   background-color #fff
</style>
