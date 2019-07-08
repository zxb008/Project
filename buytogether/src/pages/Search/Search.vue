<template>
  <div class="search">
    <SearchNav/>
    <div class="search-bot">
      <div class="left" ref="left">
        <ul>
          <!-- <li class="left-li current" v-for="(goods, index) in searchgoods" :key="index"><span>{{goods.name}}</span></li> -->
          <li class="left-li " v-for="(goods, index) in searchgoods" :key="index"><span>{{goods.name}}</span></li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul>
          <li class="right-li" v-for="(goods, index) in searchgoods" :key="index">
            <div class="li-title">
              <span>{{goods.name}}</span>
              <a href="">查看全部 ></a>
            </div>
            <ul v-if="goods.tag === 'phone'" class="li-img">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt="">
              </li>
            </ul>
            <ul class="li-items">
              <li class="items-li" v-for="(item, itemIndex) in goods.items" :key="itemIndex">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import SearchNav from './Children/SearchNav'
export default {
 name:'search',
 computed: {
   ...mapState({
     searchgoods:state => state.searchgoods,
    //  searchgoods:'searchgoods'
   })
  //  ...mapState(['searchgoods'])
 },
 components:{
   SearchNav
 },
 mounted() {
   //使得vuex里面的state获取到搜索板块的商品数据
   this.$store.dispatch('reqSearchGoods');
 },
 watch: {
   searchgoods () {
     this.$nextTick(() => {
          this.initScroll();
        })
   }
 },
 methods: {
   initScroll () {
     let scrollLeft  = new BScroll(this.$refs.left,{
        scrollY: true,
        click: true
     });
     let scrollRight  = new BScroll(this.$refs.right,{});
   }
 },
}
</script>

<style lang="stylus" scoped>
.search
  width 100%
  height 100%
  // 与顶部的标题不重叠
  //padding-top 5.4rem
  .search-bot
    position absolute
    top 90px
    bottom 50px
    width 100%
    display flex
    overflow hidden  //超出的部分隐藏
    .left
      flex 1  // flex 1 1 0
      // height 100% 不能设置高度 否则scroll不了
      // background-color blue
      ul
        width 100%
        // height 100% 不能设置高度 
        .left-li
          width 100%
          height 60px
          display flex
          justify-content center
          align-items center
          position relative
          span
            font-size 15px
            line-height 30px
        .current
          color #e02e24
          background-color #fff
          &::before
            content: ''
            // color #e02e24
            background-color #e02e24
            height 30px
            width 5px
            position absolute
            left 0px
    .right
      flex 4  // flex 4 1 0
      // height 100%
      background-color #fff
      >ul
        width 100%
        // height 100%
        .right-li
          width 100%
          // height 子元素会撑起来
          .li-title
            width 100%
            height 60px
            display flex
            justify-content space-between
            align-items center
            span
              font-size 15px
              line-height 30px
              margin-left 10px
            a
              font-size 15px
              line-height 30px
              margin-right 10px
              color #999
              text-decoration none
              font-weight lighter
          .li-img
            width 100%
            display flex
            flex-wrap wrap
            border-bottom-1px(#ccc)
            li
              width 33.3%
              display flex
              justify-content center
              align-items center
              margin 5px 0
              img
                width 70%
          .li-items
            width 100%
            display flex
            flex-wrap wrap
            // height 子元素会撑起来
            .items-li
              width 33.3%
              height 90px
              display flex
              flex-direction column 
              justify-content center
              align-items center
              img 
                width 60%
                height 60%
              span 
                color #666
                font-weight lighter
                font-size 14px
</style>
