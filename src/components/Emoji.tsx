import React from "react"
import bullsEye from "../assets/bulls-eye.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import meh from "../assets/meh.webp"
import { Image, ImageProps } from "@chakra-ui/react"

interface Props {
	rating: number
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null
	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: "meh", boxSize: "15px" },
		4: { src: thumbsUp, alt: "thumbsup", boxSize: "18px" },
		5: { src: bullsEye, alt: "bullsEye", boxSize: "25px" },
	}

	return <Image {...emojiMap[rating]} margin={1} />
}

export default Emoji
