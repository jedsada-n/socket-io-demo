import type { InternalAxiosRequestConfig } from 'axios'

import axios from 'axios'

export const API_URL = 'https://jsonplaceholder.typicode.com'

export const axiosInstance = axios.create({
    baseURL: API_URL,
})

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    return config
})
