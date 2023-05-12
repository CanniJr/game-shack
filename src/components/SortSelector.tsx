import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";

interface SortSelectorProps {
	onSelectOrder: (ordering: string) => void;
	selectedOrder: string;
}

const SortSelector = ({ onSelectOrder, selectedOrder }: SortSelectorProps) => {
	// hyphen (-) behind the values indicate sorting in reverse order (newest first).
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-metacritic", label: "popularity" },
		{ value: "-rating", label: "Average rating" },
	];

	const currentOrder = sortOrders.find(
		(order) => order.value === selectedOrder
	);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						key={order.value}
						value={order.value}
						onClick={() => onSelectOrder(order.value)}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
