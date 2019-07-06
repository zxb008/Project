<template>
  <div class="hot">
    <!-- 轮播 -->
   <swiper :options="swiperOption" v-if="homecasual.length > 0">
    <swiper-slide v-for="(item, index) in homecasual" :key="index">
      <img :src="item.imgurl" width="100%">
    </swiper-slide>
    <!-- <swiper-slide><img src="../../imgs/rowing/s2.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s3.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s4.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s5.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s6.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s7.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s8.png" width="100%"></swiper-slide>
    <swiper-slide><img src="../../imgs/rowing/s9.png" width="100%"></swiper-slide> -->
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
import { mapState } from 'vuex'
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
    },
    computed: {
      //首先mapState()返回的是一个对象，对象里面的成员是一系列的函数，所以前面...的作用就是把这个返回的对象打散,
      //把里面的一系列函数结构出来,这一系列函数的名字是根据mapState()传进去的类型为对象的参数而确定的,函数名就是
      //mapState()传进去对象{}的key值
      //参数：{ homecasual:state => state.homecasual},首先是对homecasual进行赋值，其值是一个箭头函数的返回值,
      //这个箭头函数有一个默认的参数state,也就是vuex里面的那个state对象，然后把state对象上面的homecasual赋值给homecasual,
      //然后计算属性里面就会多了一个函数名字为homecasual的函数

      // ...mapState({
      //  //第一种写法,使用箭头函数
      //   homecasual:state => state.homecasual,
      //  //第二种写法，传字符串参数 'homecasual' 等同于 `state => state.homecasual`
      //  homecasual:'homecasual',
      //  //第三种，为了能够使用 `this` 获取局部状态，必须使用常规函数
      //  //详细用法，见这篇博客 https://blog.csdn.net/dkr380205984/article/details/82185740
      // }),
      //=============================
       //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
      ...mapState(['homecasual']),
    },
    mounted() {
      //通过dispatch执行action中的reqHomeCasual()函数来从后端请求轮播的图片存到state里面
      this.$store.dispatch('reqHomeCasual');
    },
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
