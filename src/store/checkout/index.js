import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
            console.log('state', state)
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
