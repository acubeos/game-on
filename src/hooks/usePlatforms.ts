import { useQuery } from "@tanstack/react-query"
import dataPlatform from "../data/dataPlatform"
import APIClient from "../services/api-client"
import ms from "ms"
import { Platform } from "../entities/Platform"

const apiCLient = new APIClient<Platform>("/platforms/lists/parents")
const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiCLient.getAll,
		staleTime: ms("24h"),
		initialData: dataPlatform,
	})

export default usePlatforms
