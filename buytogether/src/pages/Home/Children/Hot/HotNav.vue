<template>
  <div class="hotnav">
    <div class="out">
      <div class="inner" v-if="homenav.length > 0">
        <div class="inner-item" v-for="(item,index) in homenav" :key="index">
          <img :src="item.iconurl" alt="">
          <span>{{item.icontitle}}</span>
        </div>
      </div>
    </div>
    <div class="bot" >
      <div class="bot-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "hotnav",
    data(){
      return {
        // 1. 屏幕的宽度
        screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        // 2. 滚动内容的宽度
        scrollContentW: 720,
        // 3. 滚动条背景的长度
        bgBarW: 100,
        // 4. 滚动条的长度
        barXWidth: 0,
        // 5. 起点
        startX: 0,
        // 6. 记录结束点
        endFlag: 0,
        // 7. 移动的距离
        barMoveWidth: 0
      }
    },
    computed:{
      innerBarStyle(){
        return {
          width: `${this.barXWidth}px`,
          left: `${this.barMoveWidth}px`
        }
      },
      //获取state里面的导航图片
      ...mapState(['homenav'])
    },
    mounted() {
       this.getBottomBarWidth();
       this.bindEvent();
    },
    methods:{
      // 获取滚动条的长度
      getBottomBarWidth(){
        this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW)
      },
      // 移动端事件监听
      bindEvent(){
         this.$el.addEventListener('touchstart',this.handleTouchStart,false);
         this.$el.addEventListener('touchmove',this.handleTouchMove,false);
         this.$el.addEventListener('touchend',this.handleTouchEnd,false);
      },
      // 开始触摸
      handleTouchStart(event){
         // console.log(event.touches);
         // 1. 获取第一个触点
        let touch = event.touches[0];
         // 2.求出起始点
        this.startX = Number(touch.pageX);
        // console.log(this.startX);
      },
      // 开始移动
      handleTouchMove(){
        // console.log('开始移动');
        // 1. 获取第一个触点
        let touch = event.touches[0];
        // 2. 求出移动的距离
        let moveWidth = Number(touch.pageX) - this.startX;
        // console.log(moveWidth);
        // 3. 求出滚动条走的距离
        this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFlag);

        // 4. 边界值处理
        if(this.barMoveWidth <= 0){ // 左边
          this.barMoveWidth = 0;
        }else if(this.barMoveWidth >= this.bgBarW - this.barXWidth){ // 右边
          this.barMoveWidth = this.bgBarW - this.barXWidth;
        }
      },
      // 结束触摸
      handleTouchEnd(){
        console.log('结束触摸');
        this.endFlag = this.barMoveWidth;
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../../../common/stylus/mixins.styl';
.hotnav
  width 100%
  height 180px
  padding-bottom 10px
  background-color #FFFFFF
  position relative
  .out
    width 100%
    height 100%
    overflow-x  scroll
    .inner
      width 720px
      height 100%
      display flex
      flex-wrap wrap
      .inner-item
        width 90px
        height 90px
        display flex
        flex-direction column
        justify-content center
        align-items center
        img
          width 50%
          margin-bottom 3px
        span 
          font-size 14px
          color #827F7F
  // 清除下面的滚动条
  .out::-webkit-scrollbar
    display none
  .bot
    position absolute
    left 50%
    bottom 3px
    width 100px
    height 4px
    margin-left -50px
    background-color $bg
    .bot-inner
      position absolute
      left 0
      height 100%
      width 0
      background-color #EF7A7A
</style>