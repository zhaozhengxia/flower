<template>
  <div class="product_list">
    <fl-index-product-item :tid="tid" v-for="(product,pid) in data" :data="product" :pid="pid"></fl-index-product-item>
  </div>
</template>

<script>
  import flProductItem02 from './flProductItem02'
  export default{
    name:"flProductList02",
    props:["data","tid"],
    components:{
      "fl-index-product-item":flProductItem02
    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/iconfont.css");
</style>
