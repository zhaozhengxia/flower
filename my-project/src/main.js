// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
Vue.config.productionTip = false

// // 安装vueRouter
// Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//$router $route
  components: { App },
  template: '<App/>'
})
