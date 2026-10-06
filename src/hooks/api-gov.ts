import axios from "axios"

export const apiGovData=axios.create({
    baseURL: '/api-saude',
    timeout:4000   
})
