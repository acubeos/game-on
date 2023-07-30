import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import genres from "../data/genres"
import APIClient from "../services/api-client"
import Genre from "../entities/Genre"

const apiCLient = new APIClient<Genre>("/genres")
const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiCLient.getAll,
		staleTime: ms("24h"),
		initialData: genres,
	})

export default useGenres
