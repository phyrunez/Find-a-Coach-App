import RequestsActions from './actions.js'
import RequestsMutations from './mutations.js'
import RequestsGetters from './getters.js'

const RequestsModule = {
    namespaced: true,
    state() {
        return {
            requestsArr: [],
            requestsUrl: 'https://vue-http-demo-d5c25-default-rtdb.firebaseio.com/requests.json',
            errMessage: ''
        }
    },
    mutations: RequestsMutations,
    actions: RequestsActions,
    getters: RequestsGetters
}

export default RequestsModule;