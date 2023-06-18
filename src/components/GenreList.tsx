import {
	Button,
	Card,
	HStack,
	Heading,
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
	selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres()
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

	return (
		<>
			<Heading fontSize='2xl' mt={3} mb={5}>
				Genres
			</Heading>
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
								objectFit='cover'
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								onClick={() => onSelectGenre(genre)}
								fontSize='lg'
								variant='link'
								textAlign='left'
								whiteSpace='normal'
								fontWeight={
									genre.id === selectedGenre?.id ? "extrabold" : "normal"
								}
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
