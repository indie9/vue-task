import api from '@/api'

export const mutation = {
	SET_LOADING: 'SET_LOADING',
    SET_EVENTS: 'SET_EVENTS'
}

export default {
	state: {
		loading: true,
        events:[]
	},

	getters: {
		loading: state => state.loading,
        events: state => state.events,
	},

	mutations: {
		[mutation.SET_LOADING]: (state, isLoading) => {
			state.loading = isLoading
		},
        [mutation.SET_EVENTS]: (state, eventsData) => {
			state.events = eventsData
		},
	},

	actions: {
		setLoading: ({ dispatch, commit }, value) => {
			commit(mutation.SET_LOADING, value)
		},
        fetchEvents: ({ dispatch, commit }, value) => {
			dispatch('setLoading', true)
			api.Events.getEvents()
                .then(({data}) => {
                   
                        dispatch('setLoading', false)
                        commit(mutation.SET_EVENTS, data)
                   
                })
		},
	},
}
