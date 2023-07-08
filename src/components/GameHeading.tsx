import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface HeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: HeadingProps) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  return (
    <Heading as="h1" marginY={5}>
      {platform?.name || ""} {genre?.name || ""} Games
    </Heading>
  );
};

export default GameHeading;
