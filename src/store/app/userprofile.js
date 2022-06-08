import api from '@/api'


export const mutation = {
    SET_USER_PROFILE: 'SET_USER_PROFILE',
	SET_CURRENT_PROFILE: 'SET_CURRENT_PROFILE'
}

export default {
	namespaced: true,
	state: {
        userProfileData:{},
		currentProfile:{}
	},
	getters: {
        userProfileData: state => state.userProfileData,
		currentProfile: state => state.currentProfile,
	},
	mutations: {
        [mutation.SET_USER_PROFILE]: (state, profile) => {
			state.userProfileData = profile
		},
		[mutation.SET_CURRENT_PROFILE]: (state, profileData) => {
			state.currentProfile = profileData
		},
	},

	actions: {
    login: ({ dispatch, commit }, form) => {
			api.Events.getLogin(form)
                .then(({data}) => {
								
                        localStorage.setItem('userId', data.id);
                        localStorage.setItem('userPass', form.password);	
                }).then(() => document.location.href = '/')
		},
		getUserData: ({ dispatch, commit }, id) => {
			api.Events.getUser(id)
                .then(({data}) => {
                  commit(mutation.SET_USER_PROFILE, data)	
                })
		},
		getCurrentProfile: ({ dispatch, commit }, id) => {
			api.Events.getUser(id)
                .then(({data}) => {
                        commit(mutation.SET_CURRENT_PROFILE, data)	
                })
		},
		editUserProfile: ({ dispatch, commit }, form) => {
			api.Events.editUser(form)
                .then(({data}) => {
									commit(mutation.SET_USER_PROFILE, data)
                })
		},
	},
}