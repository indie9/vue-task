export default api => {
	api.Events = {
		/*********TASKS RESPONCES********** */
		getTasks(filter) {
	
			return api.instance.request({
				method: 'post',
				url: `tasks`,
				data: filter
			})
		},
		getTask(id) {	
			return api.instance.request({
				method: 'get',
				url: `tasks/${id}`,
			})
		},
		getComments(id) {
			return api.instance.request({
				method: 'get',
				url: `comments/${id}`,
			})
		},
		/*********USERS RESPONCES********** */
		getAllUsers() {	
			return api.instance.request({
				method: 'get',
				url: `users/all`,
			})
		},
		getUser(id){
			return api.instance.request({
				method: 'get',
				url: `users/${id}`,
			})
		},
		getLogin(form) {
			return api.instance.request({
				method: 'post',
				url: 'users/login',
				data: form
			})
		}
	}
}


	