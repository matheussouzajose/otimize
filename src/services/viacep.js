export default (httpClient) => ({
    getAddress: async (zipcode) => {
        const { data } = await httpClient.get(`https://viacep.com.br/ws/${zipcode}/json/`)
        return {
            data
        }
    }
})
