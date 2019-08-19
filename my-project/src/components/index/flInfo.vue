<template>
    <div class="info">
        <fl-index-info-com></fl-index-info-com>
      <fl-index-info-pro :data="data.navs"></fl-index-info-pro>
    </div>
</template>

<script>
  import flInfoCom from './flInfoCom'
  import flInfoPro from './flInfoPro'
    export default {
        name: "flInfo",
        props:["data"],
      components:{
          "fl-index-info-com":flInfoCom,
        "fl-index-info-pro":flInfoPro
      }
    }
</script>

<style scoped>

</style>
