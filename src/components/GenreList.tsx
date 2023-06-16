import {
	Button,
	Card,
	HStack,
	Image,
	List,
	ListItem,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Spinner,
	Text,
} from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/UseGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
	onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres()
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

	return (
		<>
			{error && null}
			{isLoading &&
				skeletons.map((skeleton) => (
					<List key={skeleton}>
						<ListItem paddingY={1.5}>
							<HStack alignItems={"top"}>
								<SkeletonCircle borderRadius={8} />
								<SkeletonText boxSize={"64px"}>{skeleton}</SkeletonText>
							</HStack>
						</ListItem>
					</List>
				))}
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY={1.5}>
						<HStack>
							<Image
								boxSize={"32px"}
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								onClick={() => onSelectGenre(genre)}
								fontSize='lg'
								variant='link'
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GenreList
