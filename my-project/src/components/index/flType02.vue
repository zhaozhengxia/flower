<template>
	<div class="product">
			<div class="product_title">
				<h1>{{data.typeName}}</h1>
			</div>
      <fl-index-product-list02 :tid="data.typeId" :data="data.products"></fl-index-product-list02>
			<div class="product_more">
				<a href="#" class="product_btn">查看更多</a>
			</div>
		</div>
</template>

<script>
  import flProductList02 from './flProductList02'
  export default{
    name:"flType02",
    props:["data"],
    components:{
      "fl-index-product-list02":flProductList02
    }
  }
</script>

<style>
</style>
