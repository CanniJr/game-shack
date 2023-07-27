import { Button, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // the (!) is telling the compiler that the constant will never be null, since this page is only rendered when there is a slug param
  const [truncate, setTruncate] = useState(true);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  const arr = [1, 2, 3, 4];
  console.log(game);

  return (
    <>
      <Heading mb={5}>{game.name}</Heading>
      <Text noOfLines={truncate ? [1, 2, 3] : 0}>{game.description_raw}</Text>
      <Button
        mt={2}
        mb={5}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setTruncate(!truncate)}
      >
        {truncate ? "Show More" : "Show Less"}
      </Button>
      <SimpleGrid columns={2} spacing={20}>
        {arr.map((atr) => (
          <GameAttributes />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
