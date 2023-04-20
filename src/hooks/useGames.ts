import { useState, useEffect } from "react";
import apiClient from "../api-client/api-client";

interface Game {
	id: number;
	name: string;
}

interface FetchGameResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get<FetchGameResponse>("/games")
			.then((resp) => setGames(resp.data.results))
			.catch((err) => setError(err.message));
	}, []);

	return { games, error };
};

export default useGames;
