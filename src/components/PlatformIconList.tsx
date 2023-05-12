import { Icon, HStack } from "@chakra-ui/react";
import {
	FaWindows,
	FaApple,
	FaXbox,
	FaPlaystation,
	FaAndroid,
	FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

interface PlatformIconProps {
	platforms: Platform[];
	selectedPlatform: Platform | null;
}

const PlatformIconList = ({
	platforms,
	selectedPlatform,
}: PlatformIconProps) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		mac: FaApple,
		android: FaAndroid,
		xbox: FaXbox,
		playstation: FaPlaystation,
		linux: FaLinux,
		ios: MdPhoneIphone,
		nintendo: SiNintendo,
		web: BsGlobe,
	};
	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<>
					<Icon
						key={platform.id}
						as={iconMap[platform.slug]}
						color={
							selectedPlatform?.id === platform.id ? "white.600" : "gray.500"
						}
					/>
				</>
			))}
		</HStack>
	);
};

export default PlatformIconList;
