<template>
  <div class="filter">
    <div class="filter_item active">
      <a href="#" class="navigation">综合</a>
    </div>
    <div class="filter_item">
      <a href="#" class="navigation">销量</a>
    </div>
    <div class="filter_item" data-sort="asc">
      <a href="#" class="navigation">
        价格
        <i class="iconfont"></i>
      </a>
    </div>
    <div class="filter_item">
      <a href="#" class="navigation">新品</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "fliter"
    }
</script>

<style scoped>
@import "../../assets/iconfont.css";
</style>
