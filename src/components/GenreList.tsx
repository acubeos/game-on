import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenres from "../hooks/UseGenres"
import getCroppedImageUrl from "../services/image-url"

const GenreList = () => {
	const { data } = useGenres()
	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY={1.5}>
					<HStack>
						<Image
							boxSize={"32px"}
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Text fontSize='large'>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}

export default GenreList
