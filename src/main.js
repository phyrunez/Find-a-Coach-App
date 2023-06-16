import { createApp } from 'vue';
import App from "./App.vue"
import router from "./router.js"
import store from "./store/store.js"

import BaseCard from "./WrapperComponents/BaseCard.vue"
import BaseButton from "./WrapperComponents/BaseButton.vue"
import BaseBadge from "./WrapperComponents/BaseBadge.vue"

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)

app.use(store)

app.use(router)

app.mount('#app');
