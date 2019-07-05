<template>
  <div class="hot">
    <!-- 轮播 -->
   <swiper :options="swiperOption">
    <swiper-slide><img src="../../imgs/rowing/s1.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s2.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s3.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s4.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s5.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s6.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s7.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s8.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s9.png" width="100%"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <!-- nav分类 -->
  <HotNav/>
    <!-- 广告位 -->
    <div class="ad">
      <img src="../../imgs/hot_ad/home_ad.gif" width="100%" alt="">
    </div>
  <!-- 商品列表 -->
  <HotShopList/>
  </div>
</template>

<script>
import HotNav from './HotNav'
import HotShopList from './HotShopList'
export default {
    name: 'hot',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          autoplay: true,//可选选项，自动滑动
          loop: true,//循环
          pagination: {
              el: '.swiper-pagination',
            }
        }
      }
    },
    components:{
      HotNav,
      HotShopList
    }
  }
</script>

<style lang="stylus" scoped>
.hot
  width 100%
  height 100%
  padding-top 2.7rem
  .ad
    width 100%
    margin 8px 0
    background-color #fff
</style>
