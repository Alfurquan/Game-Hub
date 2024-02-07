import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    next?: string | null;
}

const API_KEY = process.env.API_KEY;

if(!API_KEY)
    throw new Error("API_KEY is not set");

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: API_KEY
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
    
    get = (id : string | number) =>
        axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data);
}

export default ApiClient;

