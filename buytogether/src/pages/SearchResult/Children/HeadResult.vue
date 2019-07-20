<template>
  <div class="searchmianban-header">
    <div class="header-left" @click="noShowMianBan">
      <img src="../images/back.png" />
    </div>
    <div class="header-right">
      <img src="../images/search.png" alt width="20" />
      <input ref="inputs" type="search" placeholder="迷你电车" v-model="value" />
    </div>
    <button @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="stylus" scoped></style>
