<template>
  <div class="tabBar">
    <div class="tabBar-item" @click="jump('/home')">
       <img :src="$route.path.includes('/home') ? imgArray[0].afe : imgArray[0].bef" alt />
      <span :class="{'selected':$route.path ==='/home'}">首页</span>
    </div>
    <div class="tabBar-item" @click="jump('/recommend')">
      <img :src="$route.path.includes('/recommend') ? imgArray[1].afe : imgArray[1].bef" alt />
      <span :class="{'selected':$route.path ==='/recommend'}">推荐</span>
    </div>
    <div class="tabBar-item" @click="jump('/search')">
       <img :src="$route.path.includes('/search') ? imgArray[2].afe : imgArray[2].bef" alt />
      <span :class="{'selected':$route.path ==='/search'}">搜索</span>
    </div>
    <div class="tabBar-item" @click="jump('/chat')">
       <img :src="$route.path.includes('/chat') ? imgArray[3].afe : imgArray[3].bef" alt />
      <span :class="{'selected':$route.path ==='/chat'}">聊天</span>
    </div>
    <div class="tabBar-item" @click="jump('/me')">
       <img :src="$route.path.includes('/me') ? imgArray[4].afe : imgArray[4].bef" alt />
      <span :class="{'selected':$route.path ==='/me'}">个人中心</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgArray: [
        {
          bef: require("./img/icon_home.png"),
          afe: require("./img/icon_home_selected.png")
        },
        {
          bef: require("./img/icon_intro.png"),
          afe: require("./img/icon_intro_selected.png")
        },
        {
          bef: require("./img/icon_search.png"),
          afe: require("./img/icon_search_selected.png")
        },
        {
          bef: require("./img/icon_chat.png"),
          afe: require("./img/icon_chat_selected.png")
        },
        {
          bef: require("./img/icon_mine.png"),
          afe: require("./img/icon_mine_selected.png")
        }
      ]
    };
  },
  methods: {
    jump(path) {
      this.$router.replace(path);
      // console.log(this.$router);
      // console.log(this.$route);
    }
  }
};
</script>

<style lang="stylus" scoped>
.tabBar
  width 100%
  height 50px
  background-color #fff
  position fixed
  bottom 0
  left 0
  z-index 99
  display flex
  .tabBar-item
    flex 1
    display flex
    flex-direction column
    justify-content center
    align-items center
    img
      width 35%
      margin-bottom 0.3rem
    span
      font-size 12px
    .selected
      color red
</style>
