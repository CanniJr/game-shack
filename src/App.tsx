import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	ordering: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	// const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	// const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
	// 	null
	// );

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<HStack paddingLeft={2} spacing={5} marginBottom={5}>
					<PlatformSelector
						selectedPlatform={gameQuery.platform}
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
					/>
					<SortSelector
						onSelectOrder={(ordering) =>
							setGameQuery({ ...gameQuery, ordering })
						}
						selectedOrder={gameQuery.ordering}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
