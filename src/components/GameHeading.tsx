import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface HeadingProps {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: HeadingProps) => {
	return (
		<Heading as="h1" marginY={5}>
			{gameQuery.platform?.name} {gameQuery.genre?.name} Games
		</Heading>
	);
};

export default GameHeading;
