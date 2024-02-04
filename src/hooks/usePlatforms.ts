import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: {count: platforms.length, results: platforms},
})

export default usePlatforms;
