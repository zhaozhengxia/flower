<template>
  <div class="product_item">
					<a href="#">
						<div class="product_item_img">
							<img :src="data.productImg" :alt="data.productName" />
						</div>
						<div class="product_item_info">
							<p class="product_item_info_name">{{data.productName}}</p>
							<p class="product_item_info_des">{{data.productDes}}</p>
							<p class="product_item_info_promo">{{data.productPromo}}</p>
							<div class="product_item_info_bottom">
								<div class="product_item_info_bottom_left">
									<p class="product_item_info_price">
										<strong>{{data.productSjg}}</strong>
										<s>{{data.productJg}}</s>
									</p>
									<p class="product_item_info_sales">
										已销售{{data.productSale}}件
									</p>
								</div>
								<div class="product_item_info_bottom_right">
									<i class="iconfont icon-gouwuche2"></i>
								</div>
							</div>
						</div>
					</a>
				</div>
</template>

<script>
  export default{
    name:"flProductItem01",
    props:["data","tid","pid"]
  }
</script>

<style scoped="scoped">
  @import url("../../assets/iconfont.css");
</style>
