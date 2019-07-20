<template>
  <div class="searchresult">
    <HeadResult :value="value"/>
  </div>
</template>

<script>
import HeadResult from './Children/HeadResult'
export default {
  name: "searchresult",
  data() {
    return {
      value:'',
    }
  },
  components:{
    HeadResult
  },
  created() {
    this.value = this.$route.query.value;
  },
};
</script>

<style lang="stylus" scoped>
.searchresult
  width 100%
  height 100%
</style>
