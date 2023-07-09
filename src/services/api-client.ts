import axios from "axios"

export interface FetchResponse<T> {
	count: number
	results: T[]
}

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "2ddb478ae3a34bc6ad77f9a98dfd6221",
	},
})
