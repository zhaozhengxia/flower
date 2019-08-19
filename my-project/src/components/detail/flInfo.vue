<template>
  <div>
    <fl-detail-proinfo></fl-detail-proinfo>
    <fl-detail-app></fl-detail-app>
    <div class="empty"></div>
    <fl-detail-info></fl-detail-info>
    <div class="empty">
    <div class="media">
        <div class="media-left">
            配送至
        </div>
        <div class="media-center">
            <p>
                <i class="iconfont icon-dingwei"></i>&nbsp;请选择配送地区
            </p>
        </div>
        <div class="media-right">
            <i class="iconfont icon-qianjin"></i>
        </div>
    </div>
</div>
  </div>
</template>

<script>
  import proinfo from './proinfo'
  import flApp from './flApp'
  import detailInfo from './detailInfo'
  export default{
    name:"flInfo",
    components:{
      "fl-detail-proinfo":proinfo,"fl-detail-app":flApp,
      "fl-detail-info":detailInfo
    }
  }
</script>

<style>
</style>
