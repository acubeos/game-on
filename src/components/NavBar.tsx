import { HStack, Image, Link } from "@chakra-ui/react"
import logo from "../assets/Logo.png"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

function NavBar() {
	return (
		<HStack padding='20px'>
			<Link>
				<Image
					borderRadius={10}
					objectFit='contain'
					src={logo}
					boxSize={"60px"}
				/>
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
