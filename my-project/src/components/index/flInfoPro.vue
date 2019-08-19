<template>
  <div class="info_procate">
     <fl-index-info-item v-for="item in data" :data="item"></fl-index-info-item>
  </div>
</template>

<script>
  import flInfoItem from './flInfoItem'
  export default {
    name: "flInfoPro",
    props:["data"],
    components:{
      "fl-index-info-item":flInfoItem
    }
  }
</script>

<style scoped>
@import url("../../assets/iconfont.css");
</style>
