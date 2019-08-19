<template>
  <div class="headerbar">
    <div class="headerbar_left">
      <div @click="huatools.navigateBack();" class="navigation">
        <i class="iconfont icon-fanhui"></i>
      </div>
    </div>
    <div class="headerbar_center">
      <p class="headerbar_acontent">鲜花</p>
    </div>
    <div class="headerbar_right">
      <div  class="navigation">
        <i class="iconfont icon-kefu"></i>
      </div>
      <div  class="navigation headerbar_menu_toggle">
        <i class="iconfont icon-mulu" id="iconfont-menu"></i>
        <!-- HeaderBarMenu -->
        <div class="headerbar_menu" id="headerbar_menu">
          <div class="headerbar_menu_item">
            <a href="#" class="navigation">
              <i class="iconfont icon-xiazai45" style="font-size: 16px;"></i>
              <span>首页</span>
            </a>
          </div>
          <div class="headerbar_menu_item">
            <a href="#" class="navigation">
              <i class="iconfont icon-fenlei" style="font-size: 16px;"></i>
              <span>分类</span>
            </a>
          </div>
          <div class="headerbar_menu_item">
            <a href="#" class="navigation">
              <i class="iconfont icon-gouwuche1" style="font-size: 16px;"></i>
              <span>购物车</span>
            </a>
          </div>
          <div class="headerbar_menu_item">
            <a href="#" class="navigation">
              <i class="iconfont icon-wode" style="font-size: 16px;"></i>
              <span>我的</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "flHeaderTop"
    }
</script>

<style scoped>
@import "../../assets/iconfont.css";
</style>
