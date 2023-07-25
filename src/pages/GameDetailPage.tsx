import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // the (!) is telling the compiler that the constant will never be null, since this page is only rendered when there is a slug param

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading mb={5}>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
