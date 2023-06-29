import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games')

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

// '/games/' API takes genre and platform parameters for filtering functionality.

const useGames = (gameQuery: GameQuery) =>
	useQuery({
		queryKey: ["games", gameQuery],
		// () => arrow function is necessary in this getAll since we're passing params
		queryFn: () => apiClient.getAll({
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.ordering,
						search: gameQuery.searchValue,
					},
				})
	});

export default useGames;
