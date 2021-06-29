// eslint-disable-next-line import/no-extraneous-dependencies
import {
  WiMoonAltWaningCrescent6,
  WiMoonAltWaningGibbous1,
} from 'react-icons/wi';

import { Button, useColorMode } from '@chakra-ui/react';

const ThemeChanger = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      bgColor="transparent"
    >
      {colorMode === 'light' ? <WiMoonAltWaningGibbous1 /> : <WiMoonAltWaningCrescent6 /> }
    </Button>
  );
};

export default ThemeChanger;
