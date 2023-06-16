export default {
    postCoachData(context, payload) {
        context.commit('postCoachData', payload)
    },
    
    getAllCoachData(context) {
        context.commit("getAllCoachData")
    }
}