import api from '@/api'


export const mutation = {
    SET_USER_PROFILE: 'SET_USER_PROFILE',
}

export default {
	namespaced: true,
	state: {
        userProfileData:{},
	},

	getters: {
        userProfileData: state => state.userProfileData,
	},

	mutations: {
        [mutation.SET_USER_PROFILE]: (state, profile) => {
			state.userProfileData = profile
		},
	},

	actions: {
        login: ({ dispatch, commit }, form) => {
			api.Events.getLogin(form)
                .then(({data}) => {
                        localStorage.setItem('userId', data.id);
                        localStorage.setItem('userPass', data.password);	
                }).then(() => document.location.href = '/')
		},
		getUserData: ({ dispatch, commit }, id) => {
			
			api.Events.getUser(id)
                .then(({data}) => {
                        commit(mutation.SET_USER_PROFILE, data)	
                })
		},
	},
}