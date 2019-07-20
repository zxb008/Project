<template>
  <div class="headresult">
    <div class="header-left" @click="back">
      <img src="../images/back.png" />
    </div>
    <div class="header-right">
      <img class="im1" src="../images/search.png" alt width="20" />
      <div>
        <span @click="clearSpan">{{value}}x</span>
      </div>
      <img class="im2" src="../images/caream.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    back () {
      // this.value='';不能这样直接改，因为这个值是父组件传递过来的
      this.$router.replace({
        path:'/search',
        query:{
          showMianban:false
        }
      })
    },
    clearSpan(){
      //  this.value='';
       this.$router.replace({
         path:'/search',
         query:{
           showMianban:true
         }
       })
    }
  },
};

</script>

<style lang="stylus" scoped>
.headresult
  width 100%
  height 50px
  display flex
  align-items center
  background-color #fff
  .header-left
    // flex 1.5
    width 15%
    height 100%
    display flex
    align-items center
    justify-content center
    img
      height 50%
      width 50%
  .header-right
    // flex 8.5
    width 80%
    height 80%
    display flex
    align-items center
    background-color #F5F5F5
    border-radius 10px
    .im1
      flex 0.8
      height 50%
    div
      flex 8.4
      height 100%
      display flex
      align-items center
      span
        margin-left 5px
        padding 2px 5px
        line-height 22px
        font-size 13px
        background-color #7E7979
        border-radius 7px
        opacity 0.7
        color #FFFFFF
    .im2
      flex 0.8
      height 50%
      margin-right 5px
</style>
