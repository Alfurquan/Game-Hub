import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres.ts";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");
 
const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24 hrs
        initialData: {count: genres.length, results: genres},
    }) 
}

export default useGenres;