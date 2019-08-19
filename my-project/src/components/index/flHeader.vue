<template>
<div class="header">
    <div class="topBar" id="topBar">
      <span class="topBar_close" id="topBar_close" v-on:click="Close">
        <i class="iconfont icon-guanbi3"></i>
      </span>
      <span class="topBar_img">
        <img src="../../assets/images/mobile_banner_A.png" />
      </span>
    </div>
    <div class="headerBar">
      <div class="headerBar_left">
        <router-link to="">
          <i class="iconfont icon-ico-category"></i>
        </router-link>
      </div>
      <div class="headerBar_logo">
        <img src="../../assets/images/m_hualogo.png" />
      </div>
      <div class="headerBar_right">
        <i class="iconfont icon-kefu"></i>
      </div>
    </div>
</div>
</template>

<script>
  export default{
    name:"flHeader",
    methods:{
      Close:function (e) {
        $("#topBar").hide();
      }
    }
  }

</script>

<style scoped="scoped">
  @import url("../../assets/iconfont.css");
</style>
