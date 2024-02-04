import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    next?: string | null;
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "52ec5c1c42e54663b7c9eeebb0402977"
    }
})

class ApiClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) =>
        axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
                    .then(res => res.data)
}

export default ApiClient;

