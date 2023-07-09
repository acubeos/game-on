import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse } from "../services/api-client"
import dataPlatform from "../data/dataPlatform"

const apiCLient = new APIClient<Platform>("/platforms/lists/parents")
export interface Platform {
	id: number
	name: string
	slug: string
}

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiCLient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { results: dataPlatform, count: dataPlatform.length },
	})

export default usePlatforms
