<template>
  <div class="me">
    <BeforeLogin/>
  </div>
</template>

<script>
import BeforeLogin from './Children/BeforeLogin'
export default {
  name:'me',
  components:{
    BeforeLogin
  }
}
</script>

<style lang="stylus" scoped>
.me
  width 100%
  height 100%
</style>
