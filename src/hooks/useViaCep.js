import services from '@/services'
import store from '@/store/checkout/index'

const INFOS_ADDRESS = {
    logradouro: 'address',
    bairro: 'neighborhood',
    localidade: 'city',
    uf: 'stateLabel',
}

export default function useViaCep () {
    const getAddressByZipCode = async (zipcode) => {
        try {
            const { data } = await services.viacep.getAddress(zipcode)
            if (!data.erro) {
                for (const dataKey in data) {
                    store.commit('updateFormInputUser', {
                        field: INFOS_ADDRESS[dataKey],
                        value: data[dataKey]
                    })
                }
                return
            }
            store.commit('resetFormUser')
        } catch (e) {
            console.error('Ocorreu um erro: ', e)
        }
    }

    return {
        getAddressByZipCode
    }
}
