<template>
  <div class="classItem">
    <div class="img">
      <img :src="classItemCom.img" alt="">
    </div>
    <div class="title"><span>{{classItemCom.title}}</span></div>
  </div>
</template>

<script>
export default {
  props:['classItemCom'],
data() {
  return {
    
  }
},
}
</script>

<style lang="stylus" scoped>
*
  padding 0
  margin 0
.classItem
  width 100%
  height 100%
  // border-radius 5px
  .img
    width 100%
    height 70%
    // border-radius 5px 5px 0px 0px
    img
      border-radius 5px 5px 0px 0px
      width 100%
      height 100%
  .title
    text-align center
    width 100%
    height 30%
    span
      font-weight 530
      line-height 27px
</style>
