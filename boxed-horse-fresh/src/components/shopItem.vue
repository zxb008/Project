<template>
  <div class="shopItem">
    <div class="shopItem-img">
      <img :src="shop.img" alt="">
    </div>
    <div class="shopItem-title"><span>{{shop.title}}</span></div>
    <div class="shopItem-msg"><span>{{shop.msg}}</span></div>
    <div class="shopItem-price">
      <div class="money-left"><span>￥{{shop.price}}</span></div>
      <div class="money-right"><span>/{{shop.unit}}</span></div>
      <div class="iconCart">
        <div class="iconCartImg">
          <img src="../assets/images/index/gouwuche.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['shop'],
  data() {
    return {
      
    }
  },
}
</script> 

<style  lang="stylus" scoped>
*
  margin 0
  padding 0
.shopItem
  width 100%
  height 250px
  background-color rgb(255,255,255)
  border-radius 10px
  .shopItem-img
    border-radius 10px 10px 0px 0px
    width 100%
    height 60%
    img 
      border-radius 10px 10px 0px 0px
      width 100%
      height 100%
  .shopItem-title
    width 100%
    height 15%
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span
      line-height 37.5px
      font-size 15px
      font-weight 600
  .shopItem-msg
    width 100%
    height 10%
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    span 
      line-height 25px
      font-size 14px
      opacity 0.5
  .shopItem-price
    width 100%
    height 15%
    display flex
    align-content space-between
    .money-left
      height 100%
      width 30%
      span
        line-height 37.5px
    .money-right
      height 100%
      width 50%
      span
        line-height 37.5px
    .iconCart
      height 100%
      width 20%
      position relative
      .iconCartImg
        position absolute
        left 15%
        top 15%
        width 70%
        height 70%
        border-radius 50%
        background-color #168CD9
        img
          position absolute
          left 10%
          top 10%
          width 80%
          height 80%
</style>
