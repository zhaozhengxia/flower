<template>
  <div class="product_lsit">
    <fl-index-item01 :tid="tid" v-for="(product,pid) in data" :data="product" :pid="pid"></fl-index-item01>
  </div>
</template>

<script>
  import flProductItem01 from './flProductItem01'
  export default{
    name:"flProductList01",
    props:["data","tid"],
    components:{
      "fl-index-item01":flProductItem01
    }
  }
</script>

<style scoped="scoped">
@import url("../../assets/iconfont.css");
</style>
