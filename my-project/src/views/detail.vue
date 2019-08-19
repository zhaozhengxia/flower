<template>
  <div>
    <fl-detail-header></fl-detail-header>
    <fl-detail-banner></fl-detail-banner>
    <fl-detail-info></fl-detail-info>
    <fl-detail-detail></fl-detail-detail>
    <fl-detail-diss></fl-detail-diss>
    <fl-detail-tabbar></fl-detail-tabbar>
  </div>
</template>

<script>
  import flheader from '../components/detail/flheader'
  import flbanner from '../components/detail/flbanner'
  import flInfo from '../components/detail/flInfo'
  import flpanel from '../components/detail/flpanel'
  import disseminate from '../components/detail/disseminate'
  import tabbar from '../components/detail/tabbar'
  export default{
    name:"detail",
    components:{
      "fl-detail-header":flheader,"fl-detail-banner":flbanner,
      "fl-detail-info":flInfo,"fl-detail-detail":flpanel,
      "fl-detail-diss":disseminate,"fl-detail-tabbar":tabbar
    }
  }
</script>

<style>
  @import url("../assets/details.css");
  @import url("../assets/iconfont.css");
</style>
