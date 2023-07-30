import Genre from "./Genre"
import Platform from "./Platform"
import Publisher from "./Publishers"

export default interface Game {
	id: number
	slug: string
	name: string
	genres: Genre[]
	publishers: Publisher[]
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
	rating_top: number
	description_raw: string
}
