export default {
    dataArr(state) {
        return state.dataArr
    },
    userId(state) {
        return state.userId++
    },
    dataAvail(state) {
        return state.dataArr && state.dataArr.length > 0
    },
    errMessage(state) {
        return state.errMessage
    },
}