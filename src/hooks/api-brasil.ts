import axios from "axios"

export const apiBrasilData=axios.create({
    baseURL:"https://brasilapi.com.br/api/ibge/",
    timeout:4000,
})
