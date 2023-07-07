import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface HeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: HeadingProps) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  return (
    <Heading as="h1" marginY={5}>
      {platform?.name || ""} {genre?.name || ""} Games
    </Heading>
  );
};

export default GameHeading;
