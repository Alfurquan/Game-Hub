import { Game } from "../models/Game";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug : string) =>
    useQuery({
        queryKey: ['games', slug],
        queryFn: () => apiClient.get(slug),
        staleTime: ms('24h')
    })

export default useGame;