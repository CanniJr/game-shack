import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	const { name, background_image, parent_platforms } = game;
	return (
		<Card borderRadius="md" overflow="hidden" maxW={"sm"}>
			<Image src={background_image} h={40} alt="" />
			<CardBody>
				<Heading fontSize="2xl">{name}</Heading>
				<PlatformIconList
					platforms={parent_platforms.map((platform) => platform.platform)}
				/>
			</CardBody>
		</Card>
	);
};

export default GameCard;
