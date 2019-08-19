<template>
  <div class="scrollbox" id="scrollbox" v-on:click="goTop">
    <div class="scrollbox_item" id="scrollbox-goTop">
      <i class="iconfont icon-Upward"></i>
    </div>
  </div>
</template>

<script>
  export default{
    name:"goTop",
     methods:{
      goTop:function(){
          var num = 0;
        window.onload = function () {
            var up = document.getElementById("scrollbox");
            window.onscroll=function () {
                var _top = document.body.scrollTop || document.documentElement.scrollTop;
                if(_top >=700){
                    console.log(2);
                    up.style.display = 'block'
                    console.log(2);
                } else {
                    up.style.display = 'none'
                }
            }

        }
        function goTop() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }
    }
  }
</script>

<style>
</style>
