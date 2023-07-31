import { Heading, Box, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray">
        {term}
      </Heading>
      <Text as="dt">{children}</Text>
    </Box>
  );
};

export default DefinitionItem;
