<template>
  <div class="recommend">
    <mt-header fixed title="推荐"></mt-header>
    <div class="recommend-container" v-if="recommendshoplist.length > 0">
      <ShopBlock :shop="item" :shopIndex="index" v-for="(item,index) in recommendshoplist" :key="index"/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import ShopBlock from '../../components/ShopBlock/ShopBlock'
export default {
 name:'recommend',
 components:{
  ShopBlock
 },
 computed: {
   ...mapState({
     recommendshoplist:(state)=> state.recommendshoplist
   })
 },
 mounted() {
   // 通过dispatch执行action中的reqHomeCasual()函数来从后端请求轮播的图片存到state里面
  this.$store.dispatch('reqRecommendShopList')
}
}

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
  .recommend-container
    display flex
    flex-wrap wrap
    //与底部不重叠
    margin-bottom 50px
</style>
