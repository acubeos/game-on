import { GameQuery } from "../App"
import { Heading } from "@chakra-ui/react"
import useGenres from "../hooks/UseGenres"
import usePlatforms from "../hooks/usePlatforms"

interface Props {
	gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
	const { data: genres } = useGenres()
	const genre = genres?.results.find((g) => g.id === gameQuery.genreId)

	const { data: platforms } = usePlatforms()
	const platform = platforms?.results.find((p) => p.id === gameQuery.platformId)

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

	return (
		<Heading mb={5} fontSize='7xl' as={"h1"}>
			{heading}
		</Heading>
	)
}

export default GameHeading
