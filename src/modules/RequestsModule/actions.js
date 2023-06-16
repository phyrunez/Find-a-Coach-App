export default {
    postRequests(context, payload) {
        context.commit('postRequests', payload)
    },
    
    getAllRequests(context) {
        context.commit("getAllRequests")
    }
}