import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Platform } from "../hooks/usePlatforms";
import GameRankEmoji from "./GameRankEmoji";

interface GameCardProps {
  game: Game;
  selectedPlatformId?: number;
}

const GameCard = ({ game, selectedPlatformId }: GameCardProps) => {
  const { name, background_image, parent_platforms, metacritic } = game;
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} h={40} alt="" />
      <CardBody>
        <HStack marginBottom={2} justifyContent="space-between">
          <PlatformIconList
            selectedPlatformId={selectedPlatformId}
            platforms={parent_platforms.map((platform) => platform.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {name}
          <GameRankEmoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
