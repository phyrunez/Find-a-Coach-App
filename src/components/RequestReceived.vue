<template>
    <base-card>
        <h2>Requests Received</h2>
        <div class="wrapperDiv" v-for="request in RequestsArr" :key="request">
            <h4>{{ request.email }}</h4>
            <span>{{ request.requestMessage }}</span>
        </div>
    </base-card>
</template>

<script>
export default {
    computed: {
        RequestsArr() {
            return this.$store.getters["req/requestsArr"]
        }
    },
    created() {
        this.$store.dispatch("req/getAllRequests")
    },
    mounted() {
        console.log(this.$store.dispatch("req/getAllRequests"))
    }
}
</script>

<style scoped>
h2 {
    text-align: center
}
.wrapperDiv {
    border: 1px solid grey;
    margin: 20px auto;
    padding: 0 10px;
    width: 30rem;
}
.wrapperDiv h4 {
    color: blueviolet;
}
</style>