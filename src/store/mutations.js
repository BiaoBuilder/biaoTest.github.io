import getters from './getter.js'
const state={
	showHeader:true,
	loadShow:false
}

const mutations={
	showHeader(state){
		state.showHeader=true;
	},
	hideHeader(state){
		state.showHeader=false;
	},
	showLoading(state){
		state.loadShow=true;
	},
	hideLoading(state){
		state.loadShow=false;
	}
}

export default{
	state,
	mutations,
	getters
}