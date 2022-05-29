import VueRouter from 'vue-router';

import Tasks from '../view/Tasks'
import Users from '../view/Users'
import TaskPage from '../view/TaskPage'
import Profile from '../view/Profile'
import TaskEdit from '../view/TaskEdit'
import Unfound from '../view/Unfound'

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
				path: '/Tasks', 
				name: 'Tasks',
				component: Tasks, 
				props: true,
				children: []
			},
			{ 
				path: '/Users', 
				name: 'Users',
				component: Users, 
				props: true,
				children: []
			},
			{ 
				path: '/TaskPage/:id', 
				name: 'TaskPage',
				component: TaskPage, 
				props: true,
				children: []
			},
			{ 
				path: '/Profile/:id', 
				name: 'Profile',
				component: Profile, 
				props: true,
				children: []
			},
			{ 
				path: '/TaskEdit/:id', 
				name: 'TaskEdit',
				component: TaskEdit, 
				props: true,
				children: []
			},
			{ 
				path: '/Unfound', 
				name: 'Unfound',
				component: Unfound, 
				props: true,
				children: []
			},
			{
			 	path: '/', redirect: { name: 'Tasks' }
			},
			{
				path: '*', redirect: { name: 'Unfound' }
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