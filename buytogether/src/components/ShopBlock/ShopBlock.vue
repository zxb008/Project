<template>
  <div class="shopblock">
    <img :src="shop.thumb_url" alt="">
    <h4>{{shop.short_name}}</h4>
    <div class="shopblock-babels">
      <span  v-for="(babel,babelIndex) in shop.babels" :key="babelIndex">{{babel}}</span>
    </div>
    <div class="shopblock-bot">
      <span class="bot-price">¥{{shop.price / 100}}</span>
      <span class="bot-num">{{shop.sales_tip}}</span>
      <button>发现></button>
    </div>
  </div>
</template>

<script>
export default {
// props:['shop','shopIndex'],
props:{
  shop:Object
}
}
</script>

<style lang="stylus" scoped>
.shopblock:nth-child(odd)
  margin 0px 1% 8px 0px
.shopblock
  &:nth-child(even)
    margin 0px 0px 8px 1%
.shopblock
  width 49%
  // height 100px
  background-color #FFFFFF
  img
    width 100%
    height 160px
  h4
    height 20px
    overflow hidden
    line-height 24px
    font-size 15px
    font-family serif
    font-weight 700
  .shopblock-babels
    width 100%
    height 20px
    padding-top 2.5px
    padding-bottom 2.5px
    // overflow hidden
    span
      border-radius 5px
      margin-right 3px
      font-size 12px
      color #F35151
      background-color #E4ABAB
      &:nth-child(1)
        margin-left 3px
  .shopblock-bot
    width 100%
    height 25px
    display flex
    .bot-price
      flex 1.5
      padding-top 5px
      padding-bottom 5px
      font-size 17px
      color #DC1E1E
    .bot-num
      flex 3
      padding-top 7px
      padding-bottom 7px
      padding-left 7px
      font-size 11px
      color #B6B2B2
    button
      flex 1.2
      font-size 12px
      background-color #FFFFFF
      border 1px solid #B6B2B2
      border-right none   
      border-radius 8px 0px 0px 8px
</style>



