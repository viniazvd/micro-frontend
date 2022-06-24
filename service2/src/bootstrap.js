import Vue from 'vue'
import App from './App.vue'

import 'vue-sdz/dist/css/bundle.css'

Vue.config.productionTip = false

new Vue({ render: h => h(App) }).$mount('#app-service')
