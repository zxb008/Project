<template>
  <div class="hotshoplist">
    <ul v-if="homeshoplist.length > 0">
      <li class="list-item" v-for="(item,index) in homeshoplist" :key="index">
        <img :src="item.image_url" alt />
        <div class="list-item-right">
          <span class="right-title">{{item.goods_name}}</span>
          <div class="right-bot">
            <div class="bot-bal">
              <span>极速退款</span>
              <span>好友收藏</span>
              <span>本周畅销前十</span>
            </div>
            <div class="bot-msg">
              <span class="bot-price">￥{{item.normal_price / 100}}</span>
              <span class="bot-num">{{item.sales_tip}}</span>
              <div class="bot-user">
                 <img :src="user.avatar" alt="" v-for="(user, userindex) in item.bubble" :key="userindex">
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['homeshoplist'])
  },
};
</script>

<style lang="stylus" scoped>
.hotshoplist
  // 和底部的tabBar不会重合
  margin-bottom 50px
  background-color #fff
  ul
    width 100%
    height 100%
    list-style-type none
    .list-item
      display flex
      width 100%
      height 100px
      padding 7px 0
      img
        width 40%
        height 100%
        flex 5
      .list-item-right
        flex 5
        display flex
        flex-direction column
        justify-content space-between
        .right-title
          line-height 16px
          font-size 13px
          font-weight 550
          width 95%
          height 30%
          padding 2px 2.5%
          overflow hidden
        .right-bot
          width 95%
          height 45%
          padding 2px 2.5%
          display flex
          flex-direction column
          .bot-bal
            padding 4px 0px
            flex 1
            span
              font-size 9px
              margin-right 3px 
              color #F35151
              background-color #E4ABAB
              border-radius 4px
          .bot-msg
            flex 2
            display flex
            border-bottom 0.8px solid  #D7D4D4
            .bot-price
              padding-top 7px
              padding-bottom 7px
              font-size 14px
              color #DC1E1E
              flex 1
            .bot-num
              padding-top 8px
              padding-bottom 8px
              padding-left 5px
              font-size 12px
              color #A9A6A6
              flex 4
            .bot-user
              padding-top 2px
              padding-bottom 2px
              flex 2
              img
                // height 100%
                width 23px
                border-radius 50%
              img:nth-child(2)
                margin-left -10px
</style>

