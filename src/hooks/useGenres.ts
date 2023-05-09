import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../api-client/api-client";

interface Genre {
	id: number;
	name: string;
}

interface FetchGenreResponse {
	count: number;
	results: Genre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClient
			.get<FetchGenreResponse>("/genres", { signal: controller.signal })
			.then((resp) => {
				setGenres(resp.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { genres, error, isLoading };
};

export default useGenres;
