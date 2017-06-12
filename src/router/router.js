import NavView from '../component/nav.vue';
import Home from '../component/Home.vue';
import Follow from '../component/Follow.vue';
import Column from '../component/Column.vue';
import UserInfo from '../component/UserInfo.vue';
import Article from '../component/Article.vue'
export default{
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),//切换页面时滚动条置顶
	routes:[
    // 动态路径参数 以冒号开头
    { 
    	path: '/home', 
    	component: Home,
    },
    {
	    path:'/follow',
	    component:Follow,
  	},
  	{
	    path:'/column',
	    component:Column
  	},
  	{ 
	    path: '/user-info', 
	     component:UserInfo 
	},
	{path:'/article/:id',component:Article},
    { 
	    path: '/', 
	    redirect: '/home' 
	},
	{ 
		path: '*', 
		redirect: '/home' 
	}
  ]
}