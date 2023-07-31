import { Badge } from "@chakra-ui/react";

interface GameScoreProps {
	score: number;
}

const GameScore = ({ score }: GameScoreProps) => {
	let color = score > 75 ? "green" : score >= 60 ? "yellow" : "red";
	return (
		<Badge fontSize={14} colorScheme={color} borderRadius={4} paddingX={2}>
			{score}
		</Badge>
	);
};

export default GameScore;
