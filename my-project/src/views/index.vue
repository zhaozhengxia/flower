<template>
  <div>
    <fl-index-header></fl-index-header>
    <fl-index-banner v-if="indexInfo" :data="indexInfo.banner"></fl-index-banner>
    <fl-index-info :data="indexInfo"></fl-index-info>
    <fl-index-fes></fl-index-fes>
    <fl-index-scense></fl-index-scense>
    <fl-index-product v-if="indexInfo" :data="indexInfo"></fl-index-product>
    <fl-index-brand></fl-index-brand>
    <fl-index-footer></fl-index-footer>
    <fl-index-tabbar></fl-index-tabbar>
  </div>
</template>

<script>
  import flHeader from '../components/index/flHeader'
  import flInfo from '../components/index/flInfo'
  import flFes from '../components/index/flFes'
  import flBanner from '../components/index/flBanner'
  import flScense from '../components/index/flScense'
  import flProduct from '../components/index/flProduct'
  import qytgAndBrand from '../components/index/qytgAndBrand'
  import flFooter from '../components/index/flFooter'
  import tabbar from '../components/index/tabbar'
  import IndexApi from '../apis/IndexApi'
  export default {
    name: "index",
    components:{
      "fl-index-header":flHeader,"fl-index-info":flInfo,
      "fl-index-fes":flFes,"fl-index-banner":flBanner,
      "fl-index-scense":flScense,"fl-index-product":flProduct,
      "fl-index-brand":qytgAndBrand,"fl-index-footer":flFooter,
      "fl-index-tabbar":tabbar
    },
    data:function(){
      return{
        indexInfo:{}
      }
    },
    created () {
     this._initPageData()
   },
    methods:{

      //私有方法
      /*
      @
      */
      _initPageData() {
        IndexApi.getCartInfoByUserId((data) => {
          this.indexInfo = data;
        })
      }
    }
  }
</script>

<style>
  @import "../assets/index.css";
  @import "../assets/swiper.min.css";
  #banner{
    width:100%;
    height: 15rem;
  }
  #banner a{
    display: block;
  }
  #banner img{
    height: 15rem;
    width: 100%;
  }
  #banner .swiper-pagination{
    height: 1rem;
  }
  #banner .swiper-pagination-bullet{
    width: 0.5rem;
    height: 0.5rem;
    background: #FFFFFF;
    opacity: 1;
  }
  #banner .swiper-pagination-bullet-active{
    width:2.291rem;
    height: 0.416rem;
    border-radius: 0.416rem;
    background: #FF743c;
  }
</style>
