import { createApp } from "vue";
import App from './app.vue'
import fanqie from '@Fanqie-UI/components'

const app = createApp(App)

app.use(fanqie)
app.mount("#app")