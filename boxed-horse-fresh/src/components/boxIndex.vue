<template>
  <div class="boxItem">
    <div :class="['boxItem-item','boxItem-title',{'active':boxI==0 || boxI==1}]">{{boxItem.title}}</div>
    <div class="boxItem-item boxItem-msg">{{boxItem.msg}}</div>
    <div class="boxItem-item boxItem-imgs">
      <div>
         <img :src="boxItem.imgs[0]" alt="">
      </div>
       <div>
         <img :src="boxItem.imgs[1]" alt="">
      </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['boxItem','boxI'],
  data() {
    return {
     
    }
  }
}
</script>

<style lang="stylus" scoped>
*
  margin 0
  padding 0
.active
  color #F31111
.boxItem
  width 100%
  height 100%
  .boxItem-item
    width 100%
  .boxItem-title
    height 20%
    font-weight block
  .boxItem-msg
    font-size 13px
    opacity 0.5
    height 15%
  .boxItem-imgs
    height 65%
    div
      height 90%
      width 40%
      padding 5% 5% 
      float left
      img
        width 100%
        height 100%
</style>
