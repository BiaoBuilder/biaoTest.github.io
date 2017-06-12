const LoadingComponent = require('./Loading.vue')
const out = {
  install: function(Vue) {
    Vue.component('load', LoadingComponent)
  }
}
module.exports = out

