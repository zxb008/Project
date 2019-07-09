<template>
  <div class="search">
    <SearchNav @mianBan="mianBan" />
    <div class="search-bot">
      <div class="left" ref="left">
        <ul ref="lefttul">
          <!-- <li class="left-li current" v-for="(goods, index) in searchgoods" :key="index"><span>{{goods.name}}</span></li> -->
          <li
            class="left-li" ref="leftli"
            :class="{'current':index === tarIndex}"
            v-for="(goods, index) in searchgoods"
            :key="index"
            @click="clickLeft(index)"
          >
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul ref="rightul">
          <li class="right-li" v-for="(goods, index) in searchgoods" :key="index">
            <div class="li-title">
              <span>{{goods.name}}</span>
              <a href>查看全部 ></a>
            </div>
            <ul v-if="goods.tag === 'phone'" class="li-img">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt />
              </li>
            </ul>
            <ul class="li-items">
              <li class="items-li" v-for="(item, itemIndex) in goods.items" :key="itemIndex">
                <img :src="item.icon" alt />
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <SearchMianBan v-if="show" @mianBan="mianBan"/>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
import SearchNav from "./Children/SearchNav";
import SearchMianBan from './Children/SearchMianBan'
export default {
  name: "search",
  data() {
    return {
      //右边盒子向上滚动，滚出上边界的距离，是实时更新的
      scrollY: 0,
      //右边盒子中每个li标签距离顶部距离
      rightLiArr: [],
      show:false
    };
  },
  computed: {
    ...mapState({
      searchgoods: state => state.searchgoods
      //  searchgoods:'searchgoods'
    }),
    //  ...mapState(['searchgoods']),

    //把tarIndex和左边li标签中的index来进行判断，从而判断该li标签是否添加current类来改变li的样式
    tarIndex() {
      //我们现在可以得到rightLiArr[]和实时更新的scrollY的值
      const { scrollY, rightLiArr } = this;
     
      //1.在右边盒子滑动的同时，根据scrollY和rightLiArr[]来得到一个数组下标tarIndex,再将tarIndex和index进行比较
      return rightLiArr.findIndex((liTop, index) => {
        //2.在右边盒子滑动的同时，左边也要滑动
        this._leftScroll(index);

        return scrollY >= liTop && scrollY < rightLiArr[index + 1];
      });
    }
  },
  components: {
    SearchNav,
    SearchMianBan
  },
  mounted() {
    //使得vuex里面的state获取到搜索板块的商品数据
    this.$store.dispatch("reqSearchGoods");
  },
  watch: {
    //数据渲染以后才能滚动效果
    searchgoods() {
      this.$nextTick(() => {
        //让左边和右边的两个盒子能够有滚动效果,同时对右边的盒子在进行滚动的时候，进行一个监听事件，实时更新右边盒子向上滚动的距离scrollY
        this._initScroll();
        //得到右边盒子里面每个li标签的距离顶部的高度
        this._getRightUlLiTop();
      });
    }
  },
  methods: {
    //接收SearchNav组件传递过来的值，以此来改变show的值确定是否显示SearchMianBan组件
    mianBan (flag){
      this.show = flag
    },
    _initScroll() {
      //使得左右两边的盒子right和left度可以滚动
      this.scrollLeft = new BScroll(this.$refs.left, {
        scrollY: true,
        click: true
      });
      this.scrollRight = new BScroll(this.$refs.right, {
        scrollY: true,
        probeType: 3, //注意要添加这个属性
        click: true
      });
      ///对右边的盒子向上滚动做一个监听事件,来实时更新scrollY的值
      this.scrollRight.on("scroll", pos => {
         this.scrollY = Math.abs(pos.y);
        //  console.log(this.scrollY);
      });
    },
    //得到右边盒子中每个li标签距离顶部距离
    _getRightUlLiTop() {
      const array = [];
      let top = 0;
      //第一个li标签距离顶部的距离为0
      array.push(top);
      //得到一个li标签伪数组
      let rightLi = this.$refs.rightul.getElementsByClassName('right-li');
      // let rightLi = this.$refs.rightul.getElementsByClassName("right-li");
      //伪数组没有forEach这个方法,把它变成真数组就可以，当然这这里也可以直接使用for()
      Array.prototype.slice.call(rightLi).forEach(li => {
        top += li.clientHeight;
        array.push(top);
      });
      this.rightLiArr = array;
    },
    _leftScroll (index) {
      //得到左边li标签的DOM集合
      //这样写会报错 ,因为这样得到的是个伪数组 
      //let leftLi = this.$refs.leftul.getElementsByClassName('left-li');
      let leftLi = this.$refs.leftli
       //滚动到目标元素
       this.scrollLeft.scrollToElement(leftLi[index], 300, 0, -100);
    },
    //点击左边的li标签以后，右边也会联动
    clickLeft (index) {
      // if (index === this.rightLiArr.length-1) {
        
      // }
       this.scrollY = this.rightLiArr[index];
       this.scrollRight.scrollTo(0, -this.scrollY, 300);
    }
  }
};
</script>

<style lang="stylus" scoped>
.search
  width 100%
  height 100%
  // 与顶部的标题不重叠
  // padding-top 5.4rem
  .search-bot
    position absolute
    top 90px
    bottom 50px
    width 100%
    display flex
    overflow hidden // 超出的部分隐藏
    .left
      flex 1 // flex 1 1 0
      // height 100% 不能设置高度 否则scroll不了
      // background-color blue
      ul
        width 100%
        // height 100% 不能设置高度
        .left-li
          width 100%
          height 60px
          display flex
          justify-content center
          align-items center
          position relative
          span
            font-size 15px
            line-height 30px
        .current
          color #e02e24
          background-color #fff
          &::before
            content ''
            // color #e02e24
            background-color #e02e24
            height 30px
            width 5px
            position absolute
            left 0px
    .right
      flex 4 // flex 4 1 0
      // height 100%
      background-color #fff
      >ul
        width 100%
        // height 100%
        .right-li
          width 100%
          // height 子元素会撑起来
          .li-title
            width 100%
            height 60px
            display flex
            justify-content space-between
            align-items center
            span
              font-size 15px
              line-height 30px
              margin-left 10px
            a
              font-size 15px
              line-height 30px
              margin-right 10px
              color #999
              text-decoration none
              font-weight lighter
          .li-img
            width 100%
            display flex
            flex-wrap wrap
            border-bottom-1px(#ccc)
            li
              width 33.3%
              display flex
              justify-content center
              align-items center
              margin 5px 0
              img
                width 70%
          .li-items
            width 100%
            display flex
            flex-wrap wrap
            // height 子元素会撑起来
            .items-li
              width 33.3%
              height 90px
              display flex
              flex-direction column
              justify-content center
              align-items center
              img
                width 60%
                height 60%
              span
                color #666
                font-weight lighter
                font-size 14px
</style>
