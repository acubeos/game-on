import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

function NavBar() {
	return (
		<HStack paddingRight={"20px"} pl={"10px"} pt={"10px"} pb={"10px"}>
			<Image src={logo} boxSize={"60px"} />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
