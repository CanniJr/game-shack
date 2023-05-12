import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../api-client/image-url";
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
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							src={getCroppedImageUrl(genre.image_background)}
							boxSize={10}
							borderRadius={4}
						/>
						<Button
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
	);
};

export default GenreList;
