import services from '@/services'
import store from '@/store/checkout/index'

const DATA = {
    logradouro: 'address',
    bairro: 'neighborhood',
    localidade: 'city',
    uf: 'stateLabel',
}

export default function useViaCep () {
    const getAddressByZipCode = async (zipcode) => {
        try {
            const { data } = await services.viacep.getAddress(zipcode)
            console.log({data})
            if (!data.erro) {
                for (const dataKey in data) {
                    store.commit('updateForm', {
                        field: DATA[dataKey],
                        value: data[dataKey]
                    })
                }
                return
            }
            store.commit('resetAddressValues')
        } catch (e) {
            console.error('Ocorreu um erro: ', e)
        }
    }

    return {
        getAddressByZipCode
    }
}
