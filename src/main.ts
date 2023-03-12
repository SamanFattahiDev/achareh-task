import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import repositories from './plugins/repositories.js'
import { LMap, LTileLayer, LMarker } from "leaflet";
import "leaflet/dist/leaflet.css";

const app = createApp(App)
app.component("l-map", LMap);
app.component("l-tile-layer", LTileLayer);
app.component("l-marker", LMarker);
app.use(createPinia())
app.use(router)
app.use(repositories)

app.mount('#app')
