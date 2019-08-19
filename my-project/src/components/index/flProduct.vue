<template>
  <div>
    <fl-index-type01 :data="type" v-for="type in data.types"></fl-index-type01>
    <fl-index-type02 :data="item" v-for="item in data.type"></fl-index-type02>
  </div>
</template>

<script>
  import flType01 from './flType01'
  import flType02 from './flType02'
  export default{
    name:"flProduct",
    props:["data"],
    components:{
      "fl-index-type01":flType01,
      "fl-index-type02":flType02
    }
  }
</script>

<style>
</style>
