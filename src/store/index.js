import Vuex from 'vuex'

import tasks from './app/tasks'
import users from './app/users'
import comments from './app/comments'
import userprofile from './app/userprofile'

Vue.use(Vuex)

const store = () => {
	return new Vuex.Store({
		modules: {
			tasks,users,comments,userprofile
		}
	})
}

export default store