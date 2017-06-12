import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'
import axios from 'axios'
import store from './store/index.js'
import Loading from './loading'
import filters from './filters/index.js'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
Vue.prototype.$http = axios;
Vue.use(VueRouter);
Vue.use(Loading);

/*关于axios的一些配置*/
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});


const router = new VueRouter(routes);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
