<template>
  <div>
    <fl-flower-header></fl-flower-header>
    <fl-flower-good-list></fl-flower-good-list>
    <fl-flower-footer></fl-flower-footer>
  </div>
</template>

<script>
  import flHeader from '../components/common/flHeader'
  import flowerList from '../components/flower/flowerList'
import flowerFooter from '../components/flower/flowerFooter'
  export default {
    name: "flower",
    data:function(){
      return {
        uid:this.$route.params.id,
      }
    },
    components: {
      "fl-flower-header": flHeader,
      "fl-flower-good-list": flowerList,
      "fl-flower-footer":flowerFooter
    }
  }
</script>

<style>
  @import "../assets/flower.css";
</style>
