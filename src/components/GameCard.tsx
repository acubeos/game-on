import { Game } from "../hooks/UseGames"
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"

interface Props {
	game: Game
}

const GameCard = ({ game }: Props) => {
	return (
		<Card height={"100%"}>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack mb={3} justifyContent={"space-between"}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize={"2xl"}>
					<HStack alignItems='baseline'>
						<Text>{game.name}</Text> <Emoji rating={game.rating_top} />
					</HStack>
				</Heading>
			</CardBody>
		</Card>
	)
}

export default GameCard
