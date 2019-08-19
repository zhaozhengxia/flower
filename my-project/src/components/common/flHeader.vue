<template>
    <div>
      <fl-common-top></fl-common-top>
      <fl-common-filter></fl-common-filter>
      <fl-common-purpose></fl-common-purpose>
    </div>
</template>

<script>
  import flHeaderTop from './flHeaderTop'
  import fliter from './fliter'
  import purpose from './purpose'
    export default {
        name: "flHeader",
      components:{
        "fl-common-top":flHeaderTop,
        "fl-common-filter":fliter,
        "fl-common-purpose":purpose
      }
    }
</script>

<style scoped>

</style>
