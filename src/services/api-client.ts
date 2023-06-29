import axios from "axios";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: import.meta.env.VITE_RAWG_KEY,
	},
});

class APIClient<T> {
	endpoint: string

	constructor(endpoint : string){
		this.endpoint = endpoint
	}

	getAll = () => {
		return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data)
	}

	post = (data: T) => {
		return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data)
	}
}

export default APIClient