import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';


const PlatformSelector = () => {

  const selectedPlatformId =  useGameQueryStore(s => s.gameQuery.platformId)
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)

  const { data, error } = usePlatforms(); 
  
  if(error) return null;

  const platform = usePlatform(selectedPlatformId);

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        { platform?.name || 'Platforms' }
        </MenuButton>
        <MenuList>
            {data?.results.map(platform => <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector