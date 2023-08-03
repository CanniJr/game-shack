import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useScreeShots from "../hooks/useScreenShots";

interface Props {
  id: number;
}

const GameScreenShots = ({ id }: Props) => {
  const { data, isLoading, error } = useScreeShots(id);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <Box>
      <Text fontWeight="bold">Screen Shots</Text>
      <SimpleGrid columns={{ sm: 1, md: 2 }} marginTop={4} spacing={2}>
        {data?.results.map((ss) => (
          <Image key={ss.id} src={ss.image} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenShots;
