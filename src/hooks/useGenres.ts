import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import genres from "../data/genres.ts";
import { Genre } from "../models/Genre.ts";

const apiClient = new ApiClient<Genre>("/genres");
 
const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: {count: genres.length, results: genres},
    }) 
}

export default useGenres;