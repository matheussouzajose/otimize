import axios from 'axios'
import ViaCepService from './viacep'

const httpClient = axios.create({})

export default {
    viacep: ViaCepService(httpClient)
}
