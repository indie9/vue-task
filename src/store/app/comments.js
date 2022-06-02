import api from '@/api'


export const mutation = {
	SET_COMMENTS_LOADING: 'SET_COMMENTS_LOADING',
    SET_COMMENTS: 'SET_TASKS',
}

export default {
	namespaced: true,
	state: {
		commentsLoading: true,
        comments:[],
	},

	getters: {
		commentsLoading: state => state.commentsLoading,
        comments: state => state.comments,
	},

	mutations: {
		[mutation.SET_COMMENTS_LOADING]: (state, isLoading) => {
			state.commentsLoading = isLoading
		},
        [mutation.SET_COMMENTS]: (state, commentData) => {
			state.comments = commentData
		},
	
	},

	actions: {
		setLoading: ({ dispatch, commit }, value) => {
			commit(mutation.SET_COMMENTS_LOADING, value)
		},
        fetchComments: ({ dispatch, commit }, id) => {
			
			dispatch('setLoading', true)
			api.Events.getComments(id)
                .then(({data}) => {
                        dispatch('setLoading', false)
                        commit(mutation.SET_COMMENTS, data)
						
                })
		},
	},
}
