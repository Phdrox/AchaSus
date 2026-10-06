import axios from "axios"

export const apiGovData=axios.create({
    baseURL:"/api-saude/cnes",
    timeout:4000   
})
