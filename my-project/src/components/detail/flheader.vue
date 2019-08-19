<template>
  <div class="headerbar">
    <div class="headerbar_left">
        <div  class="navigation">
            <i class="iconfont icon-fanhui"></i>
        </div>
    </div>
    <div class="headerbar_center">
        <p class="headerbar_acontent">
            <a href="#" class="navigation">
                <img src="../../assets/images/m_hualogo.png"/>
            </a>
        </p>
    </div>
    <div class="headerbar_right">
        <div  class="navigation headerbar_menu_toggle">
            <i class="iconfont icon-mulu" id="iconfont-menu" v-on:click="show"></i>
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
  import '../../assets/jquery-1.8.3.min.js';

  export default{
    name:"flheader",
    methods: {
      show:function(){
            $(".headerbar_menu").stop(true,false).fadeToggle(150);
      }
    }
  }
</script>

<style scoped="scoped">
.iconfont{
  font-size: 1.42857143rem;
}
</style>
