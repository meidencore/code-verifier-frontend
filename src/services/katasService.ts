import { AxiosRequestConfig } from "axios"
import axios from "../utils/config/axios.config"

export const getAllKatas = (token: string, limit?: number, page?: number ) => {

    // headers and query params for the GET request
    const options: AxiosRequestConfig = {
        headers: {
            "x-access-token": token
        },
        params: {
            limit,
            page
        }
    }

    return axios.get('/katas', options )
}  

export const getKatasById = (token: string, id?: string) => {

    const options: AxiosRequestConfig = {
        headers: {
            "x-access-token": token
        },
        params: {
            id
        },
    }

    return axios.get('/katas', options )
}