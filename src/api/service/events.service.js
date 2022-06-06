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
		addTask(taskData){
			return api.instance.request({
				method: 'put',
				url:'tasks/createOrEdit',
				data: taskData
			})
		},
		deleteTask(id){
			return api.instance.request({
				method: 'delete',
				url:`tasks/${id}`,
			})
		},
		getComments(id) {
			return api.instance.request({
				method: 'get',
				url: `comments/${id}`,
			})
		},
		addComment(commentData){
			return api.instance.request({
				method: 'put',
				url:'comments/createOrEdit',
				data: commentData
			})
		},
		removeComment(id){
			return api.instance.request({
				method: 'delete',
				url:`comments/${id}`,
			})
		},
		addTime(id,timeData){
			return api.instance.request({
				method: 'patch',
				url:`tasks/${id}/worktime`,
				params: timeData
			})
		},
		changeStatus(id,status) {
			return api.instance.request({
				method: 'patch',
				url:`tasks/${id}/status/${status}`,
			})
		},
		/*********USERS RESPONCES********** */
		getAllUsers() {	
			return api.instance.request({
				method: 'get',
				url: `users/all`,
			})
		},
		getUsers(filter) {
			return api.instance.request({
				method: 'post',
				url: "users",
				data: filter
			})
		},
		getUser(id){
			return api.instance.request({
				method: 'get',
				url: `users/${id}`,
			})
		},
		editUser(form) {
			return api.instance.request({
				method: 'put',
				url:'users/edit',
				params: form
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


	