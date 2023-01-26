import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import VueViewer from 'v-viewer';

import "viewerjs/dist/viewer.css"

import './assets/index.css'

const app = createApp(App)

app.use(createPinia())

app.use(VueViewer)

app.mount('#app')
