import Vue from 'vue'

Vue.filter('money', (value) => {
    return parseInt(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
})
