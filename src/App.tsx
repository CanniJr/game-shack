import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";
import "./App.css";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	ordering: string;
	searchValue: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
				<NavBar
					onSearch={(searchValue) =>
						setGameQuery({ ...gameQuery, searchValue })
					}
				/>
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
				<Box paddingLeft={2}>
					<GameHeading gameQuery={gameQuery} />
					<Flex marginBottom={5}>
						<Box marginRight={4}>
							<PlatformSelector
								selectedPlatform={gameQuery.platform}
								onSelectPlatform={(platform) =>
									setGameQuery({ ...gameQuery, platform })
								}
							/>
						</Box>
						<SortSelector
							onSelectOrder={(ordering) =>
								setGameQuery({ ...gameQuery, ordering })
							}
							selectedOrder={gameQuery.ordering}
						/>
					</Flex>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
