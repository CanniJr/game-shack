import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../api-client/image-url";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { data } = useGenres();

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
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
