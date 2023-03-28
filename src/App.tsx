import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area={"nav"} bgColor="lightblue">
				Nav
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} bgColor="red">
					Aside
				</GridItem>
			</Show>
			<GridItem area={"main"} bgColor="coral">
				Test
			</GridItem>
		</Grid>
	);
}

export default App;
