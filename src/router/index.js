import VueRouter from 'vue-router';
import FirstPage from '../view/FirstPage'
import SecondPage from '../view/SecondPage'
import ThirdPage from '../view/ThirdPage'
import Four from '../view/Four'

Vue.use(VueRouter)



Vue.use(VueRouter)

const router = () => {
	const r = 
	 new VueRouter({
		// Important to prevent hash changes!
		// Otherwise we'll get instances conflict
		mode: 'hash',
		routes: [
			{ 
				path: '/FirstPage/:id?', 
				name: 'FirstPage',
				component: FirstPage, 
				props: true,
				children: [
					{
						path: '/Four',
						name: 'Four',
						component: Four,
						props: true,
					},
				]
			},
			{ 
				path: '/SecondPage', 
				name: 'SecondPage',
				component: SecondPage, 
				props: true,
				children: []
			},
			{ 
				path: '/ThirdPage', 
				name: 'ThirdPage',
				component: ThirdPage, 
				props: true,
				children: []
			},
			{
			 	path: '/', redirect: { name: 'ThirdPage' }
			},
			{
			 	path: '*', redirect: { name: 'SecondPage' }
			}
		],
		
	});

	 r.beforeEach((to, from, next) => {
	 	console.log(from)
	 	console.log(to)
		next()
	 })

	return r
}

export default router