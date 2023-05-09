import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardProps {
	children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardProps) => {
	return (
		<Box borderRadius={10} overflow="hidden" maxW={"sm"}>
			{children}
		</Box>
	);
};

export default GameCardContainer;
