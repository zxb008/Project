<template>
  <div class="user">
    <mt-header fixed title="我的资料" class="userHead">
      <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'user',
computed: {
   ...mapState(["user"])
},
}
</script>

<style lang='stylus' scoped>
.user
  width 100%
  height 100%
  .userHead
    color #000
    font-size 18px
    height 50px
    background-color #fff
</style>

