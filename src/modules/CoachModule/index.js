import CoachActions from './actions.js'
import CoachMutations from './mutations.js'
import CoachGetters from './getters.js'

const CoachModule = {
    namespaced: true,
    state() {
        return {
            dataArr: [],
            userId: '1',
            errMessage: ''
        }
    },
    mutations: CoachMutations,
    actions: CoachActions,
    getters: CoachGetters
}

export default CoachModule;