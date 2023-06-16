import { createStore } from 'vuex'
import CoachModule from "../modules/CoachModule/index.js"
import RequestsModule from "../modules/RequestsModule/index.js"

const store = createStore({
    state() {
        return {
            isLoading: true,
        }
    },
    
    modules: {
        coach: CoachModule,
        req: RequestsModule
    },

    // getters: {
    //     userId(state) {
    //         return state.userId
    //     }
    // }
})

export default store