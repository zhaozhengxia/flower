<template>
  <div class="panel">
    <div class="panel-head">
        <div class="panel-head-title">图文详情</div>
    </div>
    <div class="panel-body">
      <fl-detail-list></fl-detail-list>
    </div>
</div>
</template>

<script>
  import flpanelList from './flpanelList'
  export default{
    name:"flpanel",
    components:{
      "fl-detail-list":flpanelList
    }
  }
</script>

<style>
</style>
