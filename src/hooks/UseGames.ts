import { GameQuery } from "../App";
import { Genre } from "./UseGenres";
import useData from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: {platform: Platform}[];
	metacritic: number;
}

const UseGames = (gameQuery: GameQuery) => useData<Game>('/games', 
{params:{
	genres: gameQuery.genre?.id, 
	platforms: gameQuery.platform?.id, 
	ordering: gameQuery.sortOrder,
	search: gameQuery.searchText}
}, 
[gameQuery])

export default UseGames