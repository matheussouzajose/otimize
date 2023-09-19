import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'
import '@/utils/vee-validate'
import '@/utils/mask'
import '@/utils/filters'

import store from '@/store/checkout/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
