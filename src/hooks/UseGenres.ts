import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import APIClient from "../services/api-client"
import { FetchResponse } from "../services/api-client"

const apiCLient = new APIClient<Genre>("/genres")
export interface Genre {
	id: number
	name: string
	image_background: string
}

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiCLient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { results: genres, count: genres.length },
	})

export default useGenres
