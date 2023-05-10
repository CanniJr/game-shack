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
import useGenres from "../hooks/useGenres";

const GenreList = () => {
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
							onClick={() => console.log(genre)}
							fontSize="lg"
							variant="link"
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
