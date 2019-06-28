<template>
  <div>
    <div class="header">
      <mt-header  title="分类">
      </mt-header>
    </div>
    <div class="contaier">
      <div class="con" v-for="(classTtem,i) in classList" :key="i">
        <classItem :classItemCom="classTtem"/>
      </div>
    </div>
  </div>
</template>

<script>
import classItem from '@/components/classItem'
export default {
data() {
  return {
    classList:[]
  }
},
components:{
  classItem
},
created() {
  this.classList = [
    {img:require("../assets/images/classShop/c1.jpg"),title:'时令水果'},
    {img:require("../assets/images/classShop/c2.jpg"),title:'新鲜蔬菜'},
    {img:require("../assets/images/classShop/c3.jpg"),title:'海鲜水产'},
    {img:require("../assets/images/classShop/c4.jpg"),title:'肉禽蛋品'},
    {img:require("../assets/images/classShop/c5.jpg"),title:'面点主食'},
    {img:require("../assets/images/classShop/c6.jpg"),title:'乳品烘焙'},
    {img:require("../assets/images/classShop/c1.jpg"),title:'时令水果'},
    {img:require("../assets/images/classShop/c2.jpg"),title:'新鲜蔬菜'},
    {img:require("../assets/images/classShop/c3.jpg"),title:'海鲜水产'},
    {img:require("../assets/images/classShop/c4.jpg"),title:'肉禽蛋品'},
    {img:require("../assets/images/classShop/c5.jpg"),title:'面点主食'},
    {img:require("../assets/images/classShop/c6.jpg"),title:'乳品烘焙'},
    {img:require("../assets/images/classShop/c1.jpg"),title:'时令水果'},
    {img:require("../assets/images/classShop/c2.jpg"),title:'新鲜蔬菜'},
    {img:require("../assets/images/classShop/c3.jpg"),title:'海鲜水产'},
  ]
},
}
</script>

<style  lang="stylus" scoped>
*
  margin 0
  padding 0
.header
  position fixed
  top 0px
  width 100%
  height 40px
.contaier
  width 90%
  height 500px
  padding 30px 5%
  margin-top 40px
  display flex
  flex-wrap wrap
  justify-content space-between 
  align-content space-between
  background-color rgba(163,178,188,0.2)
  .con
    width 30%
    height 90px
    border-radius 5px
    background-color rgba(255,255,255,1)
</style>
