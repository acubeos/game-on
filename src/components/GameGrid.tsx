import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { GameQuery } from "../App"
import UseGames from "../hooks/UseGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"

interface Props {
	gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
	const {
		data,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = UseGames(gameQuery)
	const skeletons = [1, 2, 3, 4, 5, 6]

	if (error) return <Text>{error.message}</Text>

	const fetchGameCount =
		data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0

	return (
		<InfiniteScroll
			dataLength={fetchGameCount}
			hasMore={!!hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}
		>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding={4}
				spacing={6}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
	)
}

export default GameGrid
