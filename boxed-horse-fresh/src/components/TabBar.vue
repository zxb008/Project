<template>

  <!-- <div class="bot"></div> -->
  <div class="tabBar">
    <router-link to="/index" tag="div">
        <span class="photo1"></span>
        <span>首页</span>
    </router-link>

    <router-link to="/cassification" tag="div">
        <span class="photo2"></span>
        <span>分类</span>
    </router-link>

    <router-link to="/life" tag="div">
        <span class="photo3"></span>
        <span>盒区生活</span>
     
    </router-link>

    <router-link to="/cart" tag="div" >
         <span class="photo4"></span>
        <span>购物车</span>
    
    </router-link>

    <router-link to="/my" tag="div">
         <span class="photo5"></span>
        <span>我的</span>
    </router-link>
  </div>

</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* .bot{
  position: relative;
  bottom: 0px;
  height: 51px;
  width: 100%;
} */
.tabBar {
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  border-top: solid 1px #aaa6a6;
  background-color: rgba(255,255,255);
}
.tabBar > div {
  flex-grow: 1;
  flex-shrink: 1;
}
.tabBar > div span {
  display: block;
  height: 25px;
  text-align: center;
}
.photo1{
background-image: url('../assets/images/tabBar/index.png') ;
background-repeat: no-repeat;
background-size: 40% 100%;
background-position:50% 0;
}
.photo2{
background-image: url('../assets/images/tabBar/menu.png') ;
background-repeat: no-repeat;
background-size: 40% 100%;
background-position:50% 0;
}
.photo3{
background-image: url('../assets/images/tabBar/life.png') ;
background-repeat: no-repeat;
background-size: 30% 100%;
background-position:50% 0;
}
.photo4{
background-image: url('../assets/images/tabBar/cart.png') ;
background-repeat: no-repeat;
background-size: 40% 100%;
background-position:50% 0;
}
.photo5{
background-image: url('../assets/images/tabBar/my.png') ;
background-repeat: no-repeat;
background-size: 40% 100%;
background-position:50% 0;
}
.is-active{
  color: #6166DD;
}

.is-active .photo1 {
 background-image: url('../assets/images/tabBar/indexActive.png') ;

}

.is-active .photo2 {
  background-image: url('../assets/images/tabBar/menuActive.png') ;
}
 
.is-active .photo3 {
  background-image: url('../assets/images/tabBar/lifeActive.png')
}
.is-active .photo4 {
  background-image: url('../assets/images/tabBar/cartActive.png')
}
.is-active .photo5 {
   background-image: url('../assets/images/tabBar/myActive.png')
} 
</style>
