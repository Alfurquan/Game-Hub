import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../models/Game";

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
