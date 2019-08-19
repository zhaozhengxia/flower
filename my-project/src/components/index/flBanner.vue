<template>
    <div class="swiper-container" id="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,key,index) in data">
          <router-link to="">
            <img :src="item.bannerUrl" :alt="item.bannerName"/>
          </router-link>
        </div>
      </div>
      <div class="swiper-pagination">
        <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
      </div>
    </div>
</template>

<script>
  import '../../assets/swiper.min.js';
  import Swiper from 'swiper';
  export default {
    name: 'flBanner',
    props:["data"],
    data:function(){
      return {

      }
    },
    mounted:()=>{
      var mySwiper = new Swiper ('.swiper-container', {
        loop:true,
        autoplay:true,
        pagination: {
          el:'.swiper-pagination'
        }
      })
    }
  }
</script>

<style scoped>
@import "../../assets/swiper.min.css";

</style>
