<template>
  <div class="title">
    <div class="item1">
      <div class="item1-left">
        <span>¥{{shop.price / 100}}起</span>
        <span>¥{{shop.normal_price / 100}}</span>
      </div>
      <div class="item1-right">
        <span>{{shop.sales_tip}}</span>
      </div>
    </div>
    <div class="item2">
      <span>
        {{shop.goods_name}}
        <span>急速退款</span>
      </span>
    </div>
    <div class="item3">
      <span v-for="(babel,index) in shop.babels" :key="index">{{babel}}</span>
      <span @click="showMian" class="right">></span>
    </div>
    <van-action-sheet v-model="show" title="服务说明">
     <van-cell v-for="(babel,index) in shop.babels" :key="index" :title="babel" label="详情请咨询客服" />
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  props: ["shop"],
  data() {
    return {
      show:false
    }
  },
  methods: {
    showMian () {
      this.show = true;
    }
  },
};
</script>

<style lang="stylus" scoped>
.title
  width 100%
  height 150px
  background-color #fff
  .item1
    width 100%
    height 20%
    display flex
    justify-content space-between
    align-items center
    .item1-left
      width 30%
      height 100%
      display flex
      justify-content center
      align-items flex-end
      span:first-child
        color #F12F51
        font-size 18px
      span:last-child
        margin-left 7px
        font-size 13px
        text-decoration line-through
    .item1-right
      width 30%
      height 100%
      display flex
      justify-content center
      align-items flex-end
      span
        font-size 13px
        color #B3AEAF
  .item2
    width 100%
    height 50%
    display flex
    justify-content center
    align-items center
    font-weight 500
    >span
      line-height 22px
      margin-left 10px
      margin-right 10px
      span
        line-height 20px
        padding 2px 2px
        font-size 13px
        margin-left 5px
        border-radius 5px
        color #fff
        background-color #34D04A
  .item3
    border-top 1px solid #DCDCDC
    width 100%
    height 30%
    display flex
    // justify-content center
    align-items center
    position relative
    span
      margin-left 10px
      font-size 13px
      color #B3AEAF
    .right
      // margin-right 10px
      font-size 20px
      color #B3AEAF
      position absolute
      right 8px
</style>
