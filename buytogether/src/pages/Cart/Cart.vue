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
            <van-swipe-item @click.stop="onClick1">
              <img :src="shop.thumb_url" alt width="100%" height="300px" />
            </van-swipe-item>
            <van-swipe-item @click.stop="onClick2">
              <img :src="shop.hd_thumb_url" alt width="100%" height="300px" />
            </van-swipe-item>
            <van-swipe-item @click.stop="onClick3">
              <img :src="shop.image_url" alt width="100%" height="300px" />
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
          </van-swipe>
        </div>
        <div class="wrap-title"></div>
        <div class="wrap-user"></div>
        <div class="wrap-comment"></div>
        <div class="wrap-store"></div>
        <div class="wrap-msg"></div>
      </ul>
    </div>
  </div>
</template>

<script>
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
  mounted() {
    this.shop = this.$route.query.shop;
    // console.log(this.$route.query.shop);
    // console.log(this.$route.query.shop);
    // console.log(this.shop);
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    onChange(index) {
      this.current = index;
    },
    onClick1(event) {
      ImagePreview({
        images: [this.shop.thumb_url,this.shop.hd_thumb_url,this.shop.image_url],
      });
    },
    onClick2(event) {
       ImagePreview({
        images: [this.shop.hd_thumb_url,this.shop.image_url,this.shop.thumb_url],
      });
    },
    onClick3(event) {
       ImagePreview({
        images: [this.shop.image_url,this.shop.thumb_url,this.shop.hd_thumb_url],
      });
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
</style>
