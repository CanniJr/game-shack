import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	const { name, background_image, parent_platforms, metacritic } = game;
	return (
		<Card borderRadius="md" overflow="hidden" maxW={"sm"}>
			<Image src={background_image} h={40} alt="" />
			<CardBody>
				<Heading fontSize="2xl">{name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList
						platforms={parent_platforms.map((platform) => platform.platform)}
					/>
					<CriticScore score={metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
