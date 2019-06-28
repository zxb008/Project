<template>
  <div>
    <div class="Head">
      <headIndex/>
    </div>
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../assets/images/index/lun1.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/index/lun2.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/index/lun3.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/index/lun4.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/index/lun5.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/index/lun6.jpg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="tag1">
      <img src="../assets/images/index/tag.jpg" alt>
    </div>
    <div class="classification">
      <el-row>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide1.png" alt>
            <span>餐饮熟食</span>
          </div>
        </el-col>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide2.png" alt>
            <span>水果蔬菜</span>
          </div>
        </el-col>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide3.png" alt>
            <span>肉禽蛋白</span>
          </div>
        </el-col>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide4.png" alt>
            <span>海鲜水产</span>
          </div>
        </el-col>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide5.png" alt>
            <span>速冻食品</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide6.png" alt>
            <span>周末半价</span>
          </div>
        </el-col>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide7.png" alt>
            <span>粮油零食</span>
          </div>
        </el-col>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide8.png" alt>
            <span>酒水饮料</span>
          </div>
        </el-col>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide9.png" alt>
            <span>美肤百货</span>
          </div>
        </el-col>
        <el-col :span="4.8">
          <div class="grid-content">
            <img src="../assets/images/index/divide10.png" alt>
            <span>乳品烘焙</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="tag2">
      <img src="../assets/images/index/tag.jpg" alt>
    </div>
    <div class="boxList">
      <div class="boxList-item" v-for="(item,i) in boxList" :key="i">
        <boxIndex :boxItem="item" :boxI="i"/>
      </div>
    </div>
    <div class="navBar">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">午餐</mt-tab-item>
        <mt-tab-item id="3">菜谱</mt-tab-item>
        <mt-tab-item id="4">休闲</mt-tab-item>
        <mt-tab-item id="5">人气</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="shopIndex">
             <div class="shopIndex-item" v-for="(item,i) in shopList" :key="i">
              <shopItem :shop="item"/>
             </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
         <div class="shopIndex">
             <div class="shopIndex-item" v-for="(item,i) in shopList" :key="i">
              <shopItem :shop="item"/>
             </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
           <div class="shopIndex">
             <div class="shopIndex-item" v-for="(item,i) in menuList" :key="i">
              <menuIndex :menu="item"/>
             </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
        <div class="shopIndex">
             <div class="shopIndex-item" v-for="(item,i) in shopList" :key="i">
              <shopItem :shop="item"/>
             </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
         <div class="shopIndex">
             <div class="shopIndex-item" v-for="(item,i) in shopList" :key="i">
              <shopItem :shop="item"/>
             </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import boxIndex from "@/components/boxIndex";
import shopItem from "@/components/shopItem";
import menuIndex from "@/components/menuIndex";
import shopAdvertisement from "@/components/shopAdvertisement";
import headIndex from "@/components/headIndex";

export default {
  data() {
    return {
      selected:"1",
      boxList: [],
      shopList:[],
      menuList:[]
    };
  },
  methods: {
  },
  components: {
    boxIndex,
    shopItem,
    shopAdvertisement,
    headIndex,
    menuIndex
  },
  created() {
    this.boxList = [
      {
        title: "超合算",
        msg: "百款好货特卖中，低至买1赠1",
        imgs: [
          require("../assets/images/index/beer.jpg"),
          require("../assets/images/index/fish.jpg")
        ]
      },
      {
        title: "耍大牌 盒冻力",
        msg: "多买多划算 冷链全新升级",
        imgs: [
          require("../assets/images/index/cake1.jpg"),
          require("../assets/images/index/cake2.jpg")
        ]
      },
      {
        title: "10分钟一桌菜",
        msg: "现烤酥饼上市啦~",
        imgs: [
          require("../assets/images/index/bing1.jpg"),
          require("../assets/images/index/bing2.jpg")
        ]
      },
      {
        title: "盒马100分好货",
        msg: "每月测评招募，只挑精品",
        imgs: [
          require("../assets/images/index/shanzhu1.jpg"),
          require("../assets/images/index/shanzhu2.jpg")
        ]
      },
      {
        title: "吃好点",
        msg: "整箱山竹199元15斤",
        imgs: [
          require("../assets/images/index/floor1.jpg"),
          require("../assets/images/index/floor2.jpg")
        ]
      },
      {
        title: "新品尝鲜",
        msg: "清凉过盛夏，抢鲜送到家>>",
        imgs: [
          require("../assets/images/index/bluk1.jpg"),
          require("../assets/images/index/bluk2.jpg")
        ]
      }
    ];
    this.shopList = [
      {
        img:require("../assets/images/index/ice1.jpg"), 
        title:'[手工鲜制]老北京豆包(盒马工坊)',
        msg:'手工鲜制造 豆香浓郁 美味健康无添加',
        price:'6.9',
        unit:'袋'
      },
      {
        img:require("../assets/images/index/mianbao1.jpg"),
        title:'麦穗实验室/萌肠仔面包[盒]',
        msg:'一口一个，刚刚好的满足',
        price:'14.8',
        unit:'盒'
      },
      {
        img:require("../assets/images/index/niurou1.jpg"),
        title:'牛魔魔 秘制鸡中翅300g/盒',
        msg:'精选安心食材，大厨秘制调味，无需烹饪技巧，简单做美食',
        price:'29.8',
        unit:'盒'
      },
      {
        img:require("../assets/images/index/ice1.jpg"),
        title:'[手工鲜制]老北京豆包(盒马工坊)',
        msg:'手工鲜制造 豆香浓郁 美味健康无添加',
        price:'6.9',
        unit:'袋'
      },
      {
        img:require("../assets/images/index/mianbao1.jpg"),
        title:'麦穗实验室/萌肠仔面包[盒]',
        msg:'一口一个，刚刚好的满足',
        price:'14.8',
        unit:'盒'
      },
      {
        img:require("../assets/images/index/niurou1.jpg"),
        title:'牛魔魔 秘制鸡中翅300g/盒',
        msg:'精选安心食材，大厨秘制调味，无需烹饪技巧，简单做美食',
        price:'29.8',
        unit:'盒'
      }
    ];
    this.menuList = [
      {
        img:require("../assets/images/index/lvdouzhou.jpg"),
        title:'绿豆粥',
        source:'米饭,绿豆',
        time:'30~60分钟',
        numbers:13
      },
       {
        img:require("../assets/images/index/yiner.jpg"),
        title:'桃胶皂角米炖银耳',
        source:'皂角米,银耳，桃胶，冰糖红枣',
        time:'一小时以上',
        numbers:209
      },
       {
        img:require("../assets/images/index/yiner.jpg"),
        title:'桃胶皂角米炖银耳',
        source:'皂角米,银耳，桃胶，冰糖红枣',
        time:'一小时以上',
        numbers:209
      },
       {
        img:require("../assets/images/index/lvdouzhou.jpg"),
        title:'绿豆粥',
        source:'米饭,绿豆',
        time:'30~60分钟',
        numbers:13
      }
    ]
  }
};
</script>

<style lang="stylus" scoped>
*
  padding 0
  margin 0
.Head
  top 0px
  width 100%
  height 50px
  position fixed
  z-index 99
.swipe
  margin-top 50px
  height 170px
  width 100%
  img
    width 100%
    height 100%
  .mint-swipe-indicator
    opacity 0.7
    background-color #F3F6F8
  .is-active
    // opacity 0.5
    background-color #2096D3
.tag1
  height 100px
  width 100%
  img
    width 100%
    height 100%
.classification
  height 170px
  width 100%
  .el-row
    margin-top 5px
    height 80px
    width 100%
    .el-col
      height 100%
      width 20%
      div
        padding 5% 5%
        width 90%
        height 90%
        text-align center
        img
          width 100%
          height 80%
          display block
        span
          opacity 0.7
          display block
.tag2
  margin-top 10px
  height 100px
  width 100%
  img
    width 100%
    height 100%
.boxList
  margin-top 10px
  height 360px
  width 100%
  display flex
  flex-wrap wrap
  align-content space-between
  .boxList-item
    height 120px
    width 50%
.navBar
  width 100%
  >>>.mint-navbar
        background-color rgba(203,198,198,0.2)
  >>>.mint-tab-item-label
        font-size 15px
  >>>.mint-tab-container-item
        .shopIndex
          display flex
          flex-wrap wrap
          align-content space-between
          .shopIndex-item
            padding 2.5% 2.5%
            width 45%
            height 250px
            background-color rgba(203,198,198,0.2)
           

        
</style>
