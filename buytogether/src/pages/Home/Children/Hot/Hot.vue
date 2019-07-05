<template>
  <div class="hot">
   <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide><img src="../../imgs/rowing/s1.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s2.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s3.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s4.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s5.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s6.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s7.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s8.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s9.png" width="100%"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <HotNav/>
  </div>
</template>

<script>
import HotNav from './HotNav'
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
      HotNav
    }
  }
</script>

<style lang="stylus" scoped>
.hot
  width 100%
  height 100%
  padding-top 2.7rem
</style>
