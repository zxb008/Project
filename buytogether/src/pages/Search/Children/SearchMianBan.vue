<template>
  <div class="searchmianban">
    <div class="searchmianban-header">
      <div class="header-left" @click="noShowMianBan">
        <img src="../images/back.png" />
      </div>
      <div class="header-right">
        <img src="../images/search.png" alt width="20" />
        <input ref="inputs" type="search" :placeholder="pllabel" v-model="value" />
      </div>
      <button @click="search">搜索</button>
    </div>
    <!-- <div class="bot" ref="bot"> -->
      <div class="search-content">
        <div class="title">
          <img src="../images/time.png" alt  />
          <span>最近搜索</span>
          <div @click="clear" ><img src="../images/garbage.png" alt="" ></div>
        </div>
        <ul class="search-list">
          <li @click="searchLi(index)" v-for="(item,index) in historyvalues" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="search-content">
        <div class="title">
          <img src="../images/fire.png" alt width="25" />
          <span>搜索发现</span>
          <div></div>
        </div>
        <ul class="search-list">
          <li>时尚潮鞋</li>
          <li>浴巾可穿</li>
          <li>石榴水果</li>
          <li>富豪卷纸</li>
          <li>冰箱收纳盒</li>
          <li>毛巾衣服</li>
          <li>小白鞋增高透气</li>
          <li>连衣裙夏</li>
        </ul>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
// import BScroll from "better-scroll";
import {mapState} from 'vuex'
export default {
  name: "searchmianban",
  data() {
    return {
      pllabel:'迷你电动车',
      value: ""
    };
  },
  //从vuex中的state去除所有的历史记录
  computed: {
    ...mapState(['historyvalues'])
  },
  mounted() {
    //input聚焦
    this.inputFocus();
    //滚动效果
    // this._initScrolly();
  },
  methods: {
    // _initScrolly() {
    //   this.$nextTick(() => {
    //     this.bot = new BScroll(this.$refs.bot, {
    //       scrollY: true,
    //       click: true
    //     });
    //   });
    // },
   
    inputFocus() {
      this.$nextTick(x => {
        //正确写法
        this.$refs.inputs.focus();
      });
    } ,
    //向父组件传值，关闭面板
    noShowMianBan() {
      this.$emit("mianBan", false);
    },
    //点击搜索按钮以后
    search() {
      //显示搜索的历史记录
      let flag = this.historyvalues.every((item, index) => {
        return item !== this.value;
      });
      if (this.value !== "" && flag) {
        // this.historyValue.push(this.value);
        this.$store.dispatch('reqHistoryValue',{value:this.value})
         //跳转路由,同时把参数value传过去
         this.goSearch()
         //清空input
        this.value = ''
      }
     
    },
    //点击显示的历史li标签以后
    searchLi(index) {
      this.value = this.historyvalues[index];
      //跳转路由,同时把参数value传过去
      setTimeout(()=>{
        this.goSearch(this.value)
      },2000)
    },
    goSearch(){
      //传参过去
      this.$router.replace({
        path:'/searchresult',
        query:{
          value:this.value        
        }
      })
    },
    clear(){
       this.$store.dispatch('clearHistoryValue');
        this.value = ''
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
        outline none // 去除点击input后出现光亮的边界
        border-radius 10px
        background-color #F5F5F5
    button
      font-size 15px
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
      img 
        flex 0.7
        height  20px
      span
        line-height  20px
        flex 8.3
        padding-left 10px
      div
        flex 1
        height 20px
        img 
          width 85%
          height 100%
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
