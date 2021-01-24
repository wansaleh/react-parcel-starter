import { extendTheme } from '@chakra-ui/react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

const tailwind = resolveConfig(tailwindConfig).theme;

export default extendTheme({
  contentWidth: '1240px',

  colors: {
    brand: tailwind.colors.brand,
    brandAlt: tailwind.colors.brandAlt
  },
  fonts: {
    body: tailwind.fontFamily.sans.join(','),
    heading: tailwind.fontFamily.head.join(','),
    serif: tailwind.fontFamily.serif.join(','),
    mono: tailwind.fontFamily.mono.join(',')
  },
  fontSizes: {
    '2xs': '11px',
    '7xl': '5rem',
    '8xl': '7rem'
  }
});
