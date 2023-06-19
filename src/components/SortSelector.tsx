import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	HStack,
	Text,
} from "@chakra-ui/react"
import React from "react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
	onSelectSortOrder: (sortOrder: string) => void
	sortOrder: string
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
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
						onClick={() => onSelectSortOrder(order.value)}
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
