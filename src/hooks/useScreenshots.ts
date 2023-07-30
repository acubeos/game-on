import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import Screenshots from "../entities/Screenshots"

const useScreenshots = (gameId: number) => {
	const apiClient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`)
	return useQuery({
		queryKey: ["screenshots", gameId],
		queryFn: apiClient.getAll,
	})
}

export default useScreenshots
