import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "../store";

export interface Game{
    id: number;
    name: string;
    background_image: string; 
    parent_platforms: { platform : Platform }[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
    const gameQuery = useGameQueryStore(state => state.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) =>
            apiClient.getAll({
                params : {
                    genres : gameQuery.genreId, 
                    platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
            }),
        getNextPageParam: (lastPage, allPages) => {
           return lastPage.next ? allPages.length + 1 : undefined
        },
        initialPageParam: 1,
        staleTime: ms('24h')
    })
}

                                                              
export default useGames;
