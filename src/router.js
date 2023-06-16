import { createRouter, createWebHistory } from "vue-router"
import CoachesList from "./components/CoachesList.vue"
import CoachesForm from "./components/CoachesForm.vue"
import CoachDetails from "./components/CoachDetails.vue"
import RequestReceived from "./components/RequestReceived.vue"

const routes = [
    { path: "/", redirect: "/coaches" },
    {
        path: "/coaches",
        name: "coaches",
        component: CoachesList,
    },
    {
        path: "/coaches/:id",
        // name: "details",
        component: CoachDetails,
    },
    {
        path: "/coach-form",
        // name: "coach-form",
        component: CoachesForm
    },
    {
        path: "/requests",
        // name: "requests",
        component: RequestReceived
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active'
})

export default router