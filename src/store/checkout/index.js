import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import product from '@/assets/images/otimize-product.png'

export default new Vuex.Store({
    state: {
        form: {
            name: '',
            email: '',
            cellphone: '',
            zipcode: '',
            address: '',
            number: '',
            complement: '',
            neighborhood: '',
            city: '',
            stateValue: '',
            stateLabel: '',
            creditCardName: '',
            creditCardNumber: '',
            documentNumber: '',
            creditCardMonthValue: '',
            creditCardMonthLabel: '',
            creditCardYearValue: '',
            creditCardYearLabel: '',
            installmentsNumberValue: '',
            installmentsNumberLabel: '',
            creditCardCVV: '',
            validatorUser: null,
            validatorPayment: null
        },
        product: {
          name: 'Nome do produto',
          image: product,
          value: 40,
          plan: 'Mês',
          message: 'Plano mensal com renovação automática'
        },
        errors: {},
    },
    mutations: {
        updateForm(state, { field, value }) {
            state.form[field] = value
        },
        defineErrors(state, errors) {
            state.errors = errors;
        },
        resetAddressValues(state) {
            state.form.address = ''
            state.form.neighborhood = ''
            state.form.city = ''
            state.form.stateLabel = ''
        }
    },
    actions: {
        validateForm({ commit, state }) {
            console.log(state)
            return new Promise((resolve, reject) => {
                // Valide os campos do formulário com VeeValidate
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // Se a validação passar, resolva a promessa
                        resolve();
                    } else {
                        // Se houver erros de validação, defina os erros no estado do Vuex
                        commit('defineErrors', this._vm.$validator.errors.all());
                        reject();
                    }
                });
            });
        }
    }
})
