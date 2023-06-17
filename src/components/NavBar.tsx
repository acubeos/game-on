import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {
	return (
		<HStack
			justifyContent={"space-between"}
			paddingRight={"20px"}
			pl={"10px"}
			pt={"10px"}
			pb={"10px"}
		>
			<Image src={logo} boxSize={"60px"} />
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
