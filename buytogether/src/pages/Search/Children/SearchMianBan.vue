<template>
  <div class="searchmianban">
    <div class="searchmianban-header">
      <div class="header-left" @click="noShowMianBan">
        <img src="../images/back.png"  />
      </div>
      <div class="header-right">
        <img src="../images/search.png" alt="" width="20">
        <input ref="mySearch" type="search" placeholder="迷你电车" v-model="value">
      </div>
      <button @click="search">搜索</button>
    </div>
     <div class="search-content">
        <div class="title">
          <img src="../images/fire.png" alt="" width="25">
          <span>最近搜索</span>
        </div>
      <ul class="search-list">
        <li @click="searchLi(index)" v-for="(item,index) in historyValue" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="search-content">
        <div class="title">
          <img src="../images/fire.png" alt="" width="25">
          <span>搜索发现</span>
        </div>
      <ul class="search-list">
        <li>抽纸批发</li>
        <li>浴巾可穿</li>
        <li>石榴水果</li>
        <li>富豪卷纸</li>
        <li>冰箱收纳盒</li>
        <li>毛巾衣服</li>
        <li>小白鞋增高透气</li>
        <li>连衣裙夏</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchmianban",
  data() {
    return {
      value:'',
      historyValue:[]//存放搜索的历史记录
    }
  },
  watch: {
    // value () {
    //   historyValue.push()
    // }
  },
  methods: {
    noShowMianBan() {
      this.$emit("mianBan", false);
    },
    search () {
     //显示搜索的历史记录
      let flag = this.historyValue.every((item,index)=>{
        return item !== this.value
      })
      if (this.value !== '' && flag ) {
         this.historyValue.push(this.value)
      }
      //跳转路由,同时把参数value传过去

    },
    searchLi(index){
      this.value = this.historyValue[index]
    }
  }
};
</script>


<style lang="stylus" scoped>
.searchmianban
  width 100%
  height 100%
  position fixed
  z-index 100
  top 0px
  left 0px
  background-color #fff
  .searchmianban-header
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
        outline none  //去除点击input后出现光亮的边界
        border-radius 10px
        background-color #F5F5F5
    button
      flex 1.5
      height 100%
      border none 
      background-color #fff
  .search-content
     padding 30px 15px
     .title
        display flex
        flex-direction row
        align-items center
        color #aaa
        margin-bottom 10px
     .search-list
        display flex
        flex-direction row
        flex-wrap wrap
        li
          background #ededed
          color #aaa
          margin 5px 10px
          padding 5px
          border-radius 8px
          font-weight lighter
          font-size 12px
</style>
