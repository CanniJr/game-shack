import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameRankEmoji from "./GameRankEmoji";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const { name, background_image, parent_platforms, metacritic, slug } = game;

  return (
    <Link to={`/games/${slug}`}>
      <Card>
        <Image src={getCroppedImageUrl(background_image)} h={40} alt="" />
        <CardBody>
          <HStack marginBottom={2} justifyContent="space-between">
            <PlatformIconList
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
    </Link>
  );
};

export default GameCard;
