import Vue from 'vue'
import App from './App.vue'
import VeeValidate, { Validator } from 'vee-validate'
import ptBR from 'vee-validate/dist/locale/pt_BR'

import '@/assets/css/tailwind.css'
import store from '@/store/checkout/index'

Vue.config.productionTip = false

Vue.filter('money', (value) => {
  return parseInt(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
})


Vue.use(VeeValidate);
Validator.localize('pt_BR', ptBR)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
