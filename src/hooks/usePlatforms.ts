import { useQuery } from "@tanstack/react-query"
import { FetchResponse } from "../services/api-client"
import apiClient from "../services/api-client"
import dataPlatform from "../data/dataPlatform"

interface Platform {
	id: number
	name: string
	slug: string
}

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Platform>>("/platforms/lists/parents")
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { results: dataPlatform, count: dataPlatform.length },
	})

export default usePlatforms
