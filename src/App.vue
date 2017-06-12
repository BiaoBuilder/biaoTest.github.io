<template>
  <div id="app">
  	<load v-show="loadShow"></load>
	<nav-view v-if='headerShow'></nav-view>
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
	<footer-view></footer-view>
  </div>
</template>

<script>
import nav from './component/nav.vue'
import Footer from './component/Footer.vue'

import {mapGetters,mapActions} from'vuex'

export default {
	computed:mapGetters([
		'headerShow','loadShow'
	]),
	watch:{
		$route(to,from){
			if(to.path=='/user-info'){
				this.$store.dispatch('hideHeader');
			}else{
				this.$store.dispatch('showHeader');
			}
		}
	},
	components:{
		NavView:nav,
		FooterView:Footer
	}
}
</script>

<style lang="scss">
  @import './assets/css/base.css';
  @import './assets/css/index.css';
  @import './assets/css/mydoc.css';
</style>
