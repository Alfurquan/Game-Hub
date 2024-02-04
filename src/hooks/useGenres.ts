import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "./useData.ts";
import genres from "../data/genres.ts";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

 
const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: () =>
            apiClient.get<FetchResponse<Genre>>('/genres')
                     .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24 hrs
        initialData: {count: genres.length, results: genres},
    }) 
}

export default useGenres;