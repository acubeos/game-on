import { SimpleGrid, Text } from "@chakra-ui/react"
import UseGames, { Platform } from "../hooks/UseGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genre } from "../hooks/UseGenres"

interface Props {
	selectedGenre: Genre | null
	selectedPlatform: Platform | null
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
	const { error, data, isLoading } = UseGames(selectedGenre, selectedPlatform)
	const skeletons = [1, 2, 3, 4, 5, 6]

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding={4}
				spacing={3}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	)
}

export default GameGrid
