<template>
      <div class="scense">
      	<div class="scense_title">
      		<i class="iconfont icon-shouye_shugang_shijiantixing"></i>一秒选花
      	</div>
         <fl-index-scen1></fl-index-scen1>
         <fl-index-scen2></fl-index-scen2>
      	<div class="scense_boxs">
      		<a href="#">
      			<p class="scense_boxs_name">热销榜</p>
      			<p class="scense_boxs_des">集万千宠爱</p>
      			<p class="scense_boxs_bottom">
      				<span>大家都在买</span>
      				<span>热销9.8万束</span>
      			</p>
      		</a>
      		<a href="#">
      			<p class="scense_boxs_name">特价专区</p>
      			<p class="scense_boxs_des">超值好货</p>
      			<p class="scense_boxs_bottom">
      				<span>限时直降</span>
      				<span>¥132<s>¥188</s></span>
      			</p>
      		</a>
      	</div>
      	<div class="scense_box">
      		<div class="scense_list">
      			<div class="scense_item">
      				<a href="#">
      					<img src="../../assets/img/i_scense10.png" alt="新品来袭" />
      					<span class="scense_item_pange">新品来袭</span>
      				</a>
      			</div>
      			<div class="scense_item">
      				<a href="#">
      					<img src="../../assets/img/i_scense11.png" alt="新品来袭" />
      					<span class="scense_item_pange">新品来袭</span>
      				</a>
      			</div>
      			<div class="scense_item">
      				<a href="#">
      					<img src="../../assets/img/i_scense12.png" alt="新品来袭" />
      					<span class="scense_item_pange">新品来袭</span>
      				</a>
      			</div>
      		</div>
      	</div>
      </div>
</template>

<script>
import flScen1 from './flScen1';
import flScen2 from './flScen2';
  export default {
    name: "flScense",
    components:{
      "fl-index-scen1":flScen1,"fl-index-scen2":flScen2
    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/iconfont.css");
</style>
