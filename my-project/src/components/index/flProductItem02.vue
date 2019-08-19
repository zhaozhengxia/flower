<template>
  <div class="product_item product_items">
					<router-link to="">
						<div class="product_item_img">
							<img :src="data.productImg" :alt="data.productAlt" />
						</div>
						<div class="product_item_infos">
							<p class="product_item_info_des">{{data.productName}}</p>
							<div class="product_item_info_bottoms">
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
					</router-link>
				</div>
</template>

<script>
  export default{
    name:"flProductItem02",
	props:["data","tid","pid"]
  }
</script>

<style scoped="scoped">
  @import url("../../assets/iconfont.css");
</style>
