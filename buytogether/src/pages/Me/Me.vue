<template>
  <div class="me">
    <BeforeLogin/>
    <MiddleMe/>
  </div>
</template>

<script>
import BeforeLogin from './Children/BeforeLogin'
import MiddleMe from './Children/MiddleMe'
export default {
  name:'me',
  components:{
    BeforeLogin,
    MiddleMe
  }
}
</script>

<style lang="stylus" scoped>
.me
  width 100%
  height 100%
</style>
