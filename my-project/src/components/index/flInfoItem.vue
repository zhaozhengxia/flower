<template>
  <div class="info_procate_item">
    <router-link to='/flower'>
      <img :src="data.navsImg" :alt="data.navsName"/>
      <p>{{data.navsName}}</p>
    </router-link>
  </div>
</template>

<script>
  export default{
    name:"flInfoItem",
    props:["data"]
 }
</script>

<style>
</style>
