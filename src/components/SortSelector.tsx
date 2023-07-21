import {
	Button,
	HStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import useGameQueryStore from "../store"

const SortSelector = () => {
	const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder)
	const setSortOrder = useGameQueryStore((s) => s.setSortOrder)

	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Realised date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	]
	const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				<HStack>
					<Text fontWeight='light' whiteSpace={"nowrap"}>
						Order by:
					</Text>
					<Text>{currentSortOrder?.label || "Relevance"}</Text>
				</HStack>
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => setSortOrder(order.value)}
						key={order.value}
						value={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default SortSelector
