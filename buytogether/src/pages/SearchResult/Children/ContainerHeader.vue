<template>
  <div class="out">
    <div class="containerheader">
      <div class="item">
        <el-dropdown trigger="click" @command="handleCommand" @visible-change="handlevisible">
          <span class="el-dropdown-link" ref="span1">
            综合
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">综合排序</el-dropdown-item>
            <el-dropdown-item command="b" divided>评分排序</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="item">
        <span class="itemSpan" ref="span2" @click="handleSpan2">销量</span>
      </div>
      <div class="item item2">
        <span class="itemSpan" ref="span3" @click="handleSpan3">价格</span>
      </div>
      <div class="item">
        <span class="itemSpan" ref="span4" @click="handleSpan4">品牌</span>
      </div>
      <div class="item">
        <span class="itemSpan" ref="span5" @click="handleSpan5">筛选</span>
        <img src="../images/menu.png" height="30%" alt />
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      showmianban: false
    };
  },
  methods: {
    handleCommand(command) {
      // console.log(command);
      this.$nextTick(() => {
        this.$refs.span2.style.color = "#8A8C8F";
        this.$refs.span3.style.color = "#8A8C8F";
        this.$refs.span4.style.color = "#8A8C8F";
        this.$refs.span5.style.color = "#8A8C8F";
        this.$refs.span1.style.color = "#EF4040";
      });
    },
    handlevisible(flag) {
      if (flag) {
        //下拉框出现，flag为true
        this.$nextTick(() => {
          this.$refs.span1.getElementsByTagName("i")[0].className =
            "el-icon-caret-top";
        });
      } else {
        //下拉框出现，flag为false
        this.$nextTick(() => {
          this.$refs.span1.getElementsByTagName("i")[0].className =
            "el-icon-caret-bottom";
        });
      }
    },
    handleSpan2() {
      this.$nextTick(() => {
        this.$refs.span1.style.color = "#8A8C8F";
        this.$refs.span3.style.color = "#8A8C8F";
        this.$refs.span4.style.color = "#8A8C8F";
        this.$refs.span5.style.color = "#8A8C8F";
        this.$refs.span2.style.color = "#EF4040";
      });
    },
    handleSpan3() {
      this.$nextTick(() => {
        this.$refs.span1.style.color = "#8A8C8F";
        this.$refs.span2.style.color = "#8A8C8F";
        this.$refs.span4.style.color = "#8A8C8F";
        this.$refs.span5.style.color = "#8A8C8F";
        this.$refs.span3.style.color = "#EF4040";
      });
    },
    handleSpan4() {
      this.$nextTick(() => {
        this.$refs.span1.style.color = "#8A8C8F";
        this.$refs.span2.style.color = "#8A8C8F";
        this.$refs.span3.style.color = "#8A8C8F";
        this.$refs.span5.style.color = "#8A8C8F";
        this.$refs.span4.style.color = "#EF4040";
      });
    },
    handleSpan5() {
      this.$nextTick(() => {
        this.$refs.span1.style.color = "#8A8C8F";
        this.$refs.span2.style.color = "#8A8C8F";
        this.$refs.span3.style.color = "#8A8C8F";
        this.$refs.span4.style.color = "#8A8C8F";
        this.$refs.span5.style.color = "#EF4040";
      });
      if (this.showmianban) {
        this.showmianban = false;
      } else {
        this.showmianban = true;
      }
      this.$emit("func", this.showmianban);
    }
  }
};
</script>

<style lang="stylus" scoped>
.out
  width 100%
  height 100%
  .containerheader
    width 100%
    height 100%
    display flex
    .item
      width 20%
      height 100%
      display flex
      justify-content center
      align-items center
      .el-dropdown-link
        cursor pointer
      .el-icon-arrow-down
        font-size 12px
      .itemSpan
        color #8A8C8F
        font-size 15px
</style>
