import { Icon, HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { SiSega } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Platform from "../entities/Platform";
import { IconType } from "react-icons";
import useGameQueryStore from "../store";

interface PlatformIconProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconProps) => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
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
    sega: SiSega,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={selectedPlatformId === platform.id ? "white.600" : "gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
