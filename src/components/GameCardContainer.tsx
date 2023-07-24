import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: ContainerProps) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transition: "all .1s ease-in-out",
        transform: "scale(1.05)",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
