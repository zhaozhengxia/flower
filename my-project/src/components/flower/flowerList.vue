<template>
  <div class="product">
    <div class="product_list product_list_vertical" id="productList">
      <fl-flower-item></fl-flower-item>
      <fl-flower-item></fl-flower-item>
      <fl-flower-item></fl-flower-item>
      <fl-flower-item></fl-flower-item>
    </div>
  </div>
</template>

<script>
  import flowerItem from './flowerItem'
    export default {
        name: "flowerList",
      components:{
        "fl-flower-item":flowerItem
      }
    }
</script>

<style scoped>
@import "../../assets/iconfont.css";
</style>
