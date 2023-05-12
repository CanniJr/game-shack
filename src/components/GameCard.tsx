import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../api-client/image-url";
import { Platform } from "../hooks/usePlatforms";

interface GameCardProps {
	game: Game;
	selectedPlatform: Platform | null;
}

const GameCard = ({ game, selectedPlatform }: GameCardProps) => {
	const { name, background_image, parent_platforms, metacritic } = game;
	return (
		<Card>
			<Image src={getCroppedImageUrl(background_image)} h={40} alt="" />
			<CardBody>
				<Heading fontSize="2xl">{name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList
						selectedPlatform={selectedPlatform}
						platforms={parent_platforms.map((platform) => platform.platform)}
					/>
					<CriticScore score={metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
