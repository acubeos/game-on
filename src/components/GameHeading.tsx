import { GameQuery } from "../App"
import { Heading } from "@chakra-ui/react"
import useGenres from "../hooks/UseGenres"
import usePlatforms from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform"
import useGenre from "../hooks/useGenre"

interface Props {
	gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
	const genre = useGenre(gameQuery.genreId)

	const platform = usePlatform(gameQuery.platformId)

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

	return (
		<Heading mb={5} fontSize='7xl' as={"h1"}>
			{heading}
		</Heading>
	)
}

export default GameHeading
