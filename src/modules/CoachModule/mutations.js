export default {
    postCoachData(state, payload) {
        fetch('https://vue-http-demo-d5c25-default-rtdb.firebaseio.com/coaches.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: payload.firstName,
                firstName: payload.firstName,
                lastName: payload.lastName,
                skillSet: payload.skillSet,
                description: payload.description,
                rate: payload.rate
            })
        })
        .then((resp) => {
            if(resp.ok) state.errMessage = "Request was a Success!!"
        })
        .catch(err => {
            state.errMessage = err.message
        })
    },

    getAllCoachData(state) {
        fetch('https://vue-http-demo-d5c25-default-rtdb.firebaseio.com/coaches.json')
        .then((resp) => {
            const data = resp.json()
            console.log(data)
            return data
        })
        .then((data) => {
            state.dataArr = data
            console.log(state.dataArr)
        })
        .catch(err => {
            state.errMessage = err.message + " - Please check the url and try again"
        })
    }
}