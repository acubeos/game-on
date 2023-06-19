import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  
}

const theme = extendTheme({ config , fonts: {
    heading: `'Roboto Condensed', sans-serif`,
    body: `'Roboto Condensed', sans-serif`,
  }})

export default theme