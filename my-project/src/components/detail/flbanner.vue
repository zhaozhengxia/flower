<template>
<div class="banner">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="http://img01.hua.com/uploadpic/newpic/201709271724529549.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="http://img01.hua.com/uploadpic/newpic/201709271724529549.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="http://img01.hua.com/uploadpic/newpic/201709271724529549.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="http://img01.hua.com/uploadpic/newpic/201709271724529549.jpg"/>
            </div>
        </div>
        <div class="swiper-pagination" style="width:2.5rem;right: 10px;left: inherit;"></div>
    </div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
</div>
</template>

<script>
  import  '../../assets/swiper.min.js'
  import Swiper from 'swiper';
  export default{
    name:"flbanner",
    mounted:()=>{
      var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type:'fraction'
            },
        })
    }
  }
</script>

<style>
@import url("../../assets/swiper.min.css");
</style>
