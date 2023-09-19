import Vue from 'vue'
import ptBR from 'vee-validate/dist/locale/pt_BR'
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(VeeValidate);
Validator.localize('pt_BR', ptBR)
