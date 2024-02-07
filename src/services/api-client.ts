import axios, { AxiosRequestConfig } from "axios";
import { AppSettings } from "../env/AppSettings";


export interface FetchResponse<T> {
    count: number;
    results: T[];
    next?: string | null;
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: AppSettings.API_KEY
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

