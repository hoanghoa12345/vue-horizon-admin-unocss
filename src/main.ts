import { createApp } from 'vue'

import App from './App.vue'
import routes from './routes'
import store from './stores'
import 'virtual:uno.css'
import './styles/main.css'
import '@unocss/reset/normalize.css'

const app = createApp(App)

app.use(routes)
app.use(store)
app.mount('#app')
