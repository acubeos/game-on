import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Heading, Spinner } from "@chakra-ui/react"
import ExpandableText from "../components/ExpandableText"
import GameAttributes from "../components/GameAttributes"
import GameScreenshots from "../components/GameScreenshots"

const GameDetailsPage = () => {
	const { slug } = useParams()
	const { data: game, isLoading, error } = useGame(slug!)

	if (isLoading) return <Spinner />

	if (error || !game) throw error

	return (
		<>
			<Heading>{game.name}</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
			<GameScreenshots gameId={game.id} />
		</>
	)
}

export default GameDetailsPage
