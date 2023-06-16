export default {
    postRequests(state, payload) {
        fetch(state.requestsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: new Date().toISOString(),
                email: payload.email,
                requestMessage: payload.requestMessage
            })
        })
        .then((resp) => {
            if(resp.ok) state.errMessage = "Request was a Success!!"
        })
        .catch(err => {
            state.errMessage = err.message
        })
    },

    getAllRequests(state) {
        fetch(state.requestsUrl)
        .then((resp) => {
            const data = resp.json()
            console.log(data)
            return data
        })
        .then((data) => {
            state.requestsArr = data
            console.log(state.requestsArr)
        })
        .catch(err => {
            state.errMessage = err.message + " - Please check the url and try again"
        })
    }
}