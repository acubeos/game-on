import { SimpleGrid, Text } from "@chakra-ui/react"
import UseGames, { Platform } from "../hooks/UseGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genre } from "../hooks/UseGenres"
import { GameQuery } from "../App"

interface Props {
	gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
	const { error, data, isLoading } = UseGames(gameQuery)
	const skeletons = [1, 2, 3, 4, 5, 6]

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				paddingY={4}
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
