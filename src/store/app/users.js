import api from '@/api'


export const mutation = {
	SET_USERS_LOADING: 'SET_USERS_LOADING',
  SET_USERS: 'SET_TASKS',
	SET_USERS_FILTER: 'SET_USERS_FILTER',
  SET_USERLIST: 'USER_LIST'
}

export default {
	namespaced: true,
	state: {
		
    users:[],
		usersFilter:{
			"filter": {},
			"page": 0,
			"limit": 100
		},
    userlist:{},
		usersLoading: false,
	},

	getters: {
        users: state => state.users,
        userlist: state => state.userlist,
				usersLoading: state => state.usersLoading,
	},

	mutations: {
		[mutation.SET_USERS_LOADING]: (state, isActive) => {
			state.usersLoading = isActive
		},
    [mutation.SET_USERS]: (state, usersData) => {
			state.users = usersData
		},
		[mutation.SET_USERS_FILTER]: (state, filterData) => {
			state.usersFilter = filterData
		},
    [mutation.SET_USERLIST]: (state, userlist) => {
			state.userlist = userlist
		},
	},

	actions: {
		setLoading: ({ dispatch, commit }, value) => {
			commit(mutation.SET_USERS_LOADING, value)
		},

    fetchUsers: ({ dispatch, commit }, filter) => {
			dispatch('setLoading', true);
			api.Events.getAllUsers()
                .then(({data}) => { 
                        commit(mutation.SET_USERS, data)
                        let ul = {};
                        data.map((item) => {
                            ul[item.id] = item.username; 
                        })
                        
                        commit(mutation.SET_USERLIST,ul)
                        dispatch('setLoading', false)
                           
                        
                })
		},

	},
}
