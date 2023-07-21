import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	SkeletonCircle,
	SkeletonText,
} from "@chakra-ui/react"
import useGenres from "../hooks/UseGenres"
import getCroppedImageUrl from "../services/image-url"
import useGameQueryStore from "../store"

const GenreList = () => {
	const { data, isLoading, error } = useGenres()
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId)
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId)

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
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY={1.5}>
						<HStack>
							<Image
								boxSize={"32px"}
								objectFit='cover'
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								onClick={() => setSelectedGenreId(genre.id)}
								fontSize='lg'
								variant='link'
								textAlign='left'
								whiteSpace='normal'
								fontWeight={
									genre.id === selectedGenreId ? "extrabold" : "normal"
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
