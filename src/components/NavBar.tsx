import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/Logo.png"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import { Link } from "react-router-dom"

function NavBar() {
	return (
		<HStack padding='20px'>
			<Link to='/'>
				<Image
					borderRadius={10}
					objectFit='contain'
					src={logo}
					boxSize='50px'
				/>
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
