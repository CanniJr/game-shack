import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import platforms from "../data/platforms";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform?: number;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform: selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
