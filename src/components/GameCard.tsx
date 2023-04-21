import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	const { name, background_image } = game;
	return (
		<Card borderRadius="md" overflow="hidden" maxW={"sm"}>
			<Image src={background_image} h={40} alt="" />
			<CardBody>
				<Heading fontSize="md">{name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
