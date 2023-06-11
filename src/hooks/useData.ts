import { CanceledError } from "axios"
import { useState, useEffect } from "react"
import apiClient from "../services/api-client"



interface FetchResponse <T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {    
    const [data, setData] = useState<T[]>([])
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const controller = new AbortController()

		setIsLoading(true)
		apiClient
			.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
			.then((res) => {
				setData(res.data.results)
				setIsLoading(false)})
			.catch((err) => {
				if (err instanceof CanceledError) return
				setError(err.message)
				setIsLoading(false)})

		return () => controller.abort()
	}, [])

     return {data, error, isLoading}}

export default useData