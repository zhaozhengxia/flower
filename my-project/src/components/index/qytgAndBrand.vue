<template>
<div>
    <fl-index-qytg></fl-index-qytg>
    <fl-index-brand></fl-index-brand>
</div>
</template>

<script>
import qytg from './qytg'
import brand from './brand'
export default {
    name:"qytgAndBrand",
    components:{
        "fl-index-qytg":qytg,
        "fl-index-brand":brand
    }
}
</script>

<style scode="scode">
@import url("../../assets/iconfont.css");
</style>