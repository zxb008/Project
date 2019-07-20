<template>
  <div class="headresult">
    <div class="header-left" @click="noShowMianBan">
      <img src="../images/back.png" />
    </div>
    <div class="header-right">
      <img src="../images/search.png" alt width="20" />
      <input ref="inputs" type="search" placeholder="迷你电车" v-model="value" />
    </div>
    <button @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  props:['value'],
};
</script>

<style lang="stylus" scoped>
.headresult
    width 100%
    height 50px
    display flex
    align-items center
    .header-left
      flex 1.5
      height 100%
      display flex
      align-items center
      justify-content center
      img
        height 50%
        width 50%
    .header-right
      flex 7
      height 80%
      display flex
      align-items center
      background-color #F5F5F5
      border-radius 10px
      img
        flex 1
        height 50%
      input
        flex 9
        height 100%
        border none
        outline none // 去除点击input后出现光亮的边界
        border-radius 10px
        background-color #F5F5F5
    button
      font-size 15px
      flex 1.5
      height 100%
      border none
      background-color #fff
</style>
