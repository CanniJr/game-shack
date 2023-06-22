import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";

interface GenreProps {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreProps) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize="2xl" marginBottom={4}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
								boxSize={10}
								borderRadius={4}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								onClick={() => onSelectGenre(genre)}
								fontSize="lg"
								variant="link"
								fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
