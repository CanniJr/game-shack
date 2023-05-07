import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import React from "react";

const GameCardSkeleton = () => {
	return (
		<Card width="300px" borderRadius="md" overflow="hidden" maxW={"sm"}>
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
