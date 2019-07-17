<template>
  <div class="middleme">
    <div class="my-older">
      <div class="older-top">
        <h3>我的订单</h3>
        <span>查看全部 ></span>
      </div>
      <div class="older-bottom">
        <div class="bottom-item">
          <i class="zxb-zxb-order-1"></i>
          <span>待付款</span>
        </div>
        <div class="bottom-item">
          <i class="zxb-zxb-order-2"></i>
          <span>待分享</span>
        </div>
        <div class="bottom-item">
          <i class="zxb-zxb-order-3"></i>
          <span>待发货</span>
        </div>
        <div class="bottom-item">
          <i class="zxb-zxb-order-4"></i>
          <span>待收货</span>
        </div>
        <div class="bottom-item">
          <i class="zxb-zxb-order-5"></i>
          <span>待评价</span>
        </div>
      </div>
    </div>
    <div class="setting">
       <div class="setting-item">
        <i class="zxb-zxb-red-1"></i>
        <span>优惠券</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-red-2"></i>
        <span>商品收藏</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-red-3"></i>
        <span>店铺收藏</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-red-4"></i>
        <span>浏览历史</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-red-5"></i>
        <span>退款售后</span>
      </div>
    </div>
    <div class="setting">
      <div class="setting-item">
        <i class="zxb-zxb-oring-1"></i>
        <span>多多果园</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-oring-2"></i>
        <span>砍价免费拿</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-oring-3"></i>
        <span>1分抽奖</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-oring-4"></i>
        <span>天天领现金</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-oring-5"></i>
        <span>多多爱消除</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-oring-6"></i>
        <span>收货地址</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-oring-7"></i>
        <span>我的评价</span>
      </div>
      <div class="setting-item">
        <i class="zxb-zxb-oring-8"></i>
        <span>官方客服</span>
      </div>
      <router-link tag="div" class="setting-item" to="/setting">
        <i class="zxb-zxb-oring-9"></i>
        <span>设置</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.middleme
  width 100%
  //height 让子元素撑起来
  font-size 12px
  .my-older
    width 100%
    background-color #fff
    .older-top
      width 100%
      display flex
      flex-direction row
      padding 0 10px
      justify-content space-between
      height 44px
      line-height 44px
      h3
        font-size 14px
      span 
        opacity 0.5
    .older-bottom
      width 100%
      display flex
      .bottom-item
        flex 1
        height 60px
        display flex
        flex-direction column
        justify-content center
        align-items center
        i
          font-size 30px
          color #E9232C
          margin-bottom 5px
  .setting
    width 100%
    margin-top 10px
    background-color #fff
    display flex
    // justify-content space-between
    flex-wrap wrap
    .setting-item
      // width 90px
      width 20%
      height 70px
      display flex
      flex-direction column
      justify-content center
      align-items center
      i
        font-size 30px
        color orange
        margin-bottom 5px
</style>
