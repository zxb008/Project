<template>
  <div class="home">
    <ly-tab v-model="selectedId" :items="items" :options="options" @change="choice" class="home-tab"></ly-tab>
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      selectedId: 0,
      items: [
          {label: '热门'},
          {label: '女装'},
          {label: '百货'},
          {label: '鞋包'},
          {label: '食品'},
          {label: '母婴'},
          {label: '内衣'},
          {label: '电器'},
          {label: '男装'},
      ],
      options: {
        activeColor: '#F41A1A'
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      secondUrl: [
        '/home/hot','/home/womanClothes','/home/departmentStore',
        '/home/shopBag','/home/foods','/home/montherBaby',
        '/home/underwear','/home/electricAppliance','/home/manClothes'
      ]
    }
  },
  methods: {
    choice (item, index) {
      // console.log(item, index)
      this.$router.replace(this.secondUrl[index])
    }
  },
};
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  .home-tab
    position fixed
    top 0 
    left 0
    width 100%
    z-index 98
</style>
