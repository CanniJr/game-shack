// import useData from "./useData";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
