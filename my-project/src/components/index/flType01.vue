<template>
<div class="product">
  <div class="product_title">
      <h1>{{data.typesName}}</h1>
  </div>
   <fl-index-lis01 :tid="data.typesId" :data="data.products"></fl-index-lis01>
  <div class="product_more">
    <a href="#" class="product_btn">查看更多</a>
  </div>
</div>
</template>

<script>
  import flProductList01 from './flProductList01'
  export default{
    name:"flType01",
    props:["data"],
    components:{
      "fl-index-lis01":flProductList01
    }
  }
</script>

<style>

</style>
