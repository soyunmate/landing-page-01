import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

let theme = extendTheme(config)

theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: {
          light: 'dark.500',
          dark: 'dark.50',
        },
      },
    },
  },
  // Colors
  colors: {
    primary: {
      50: '#e1f6ff',
      100: '#bfdef2',
      200: '#99c7e4',
      300: '#73b0d8',
      400: '#4f99cc',
      500: '#3580b2',
      600: '#27648c',
      700: '#194765',
      800: '#092b3f',
      900: '#000f1a',
    },
    secondary: {
      50: '#defbfe',
      100: '#beedee',
      200: '#9cdfe0',
      300: '#77d0d2',
      400: '#54c3c5',
      500: '#3aa9ab',
      600: '#298485',
      700: '#185f60',
      800: '#04393a',
      900: '#001616',
    },
    light: {
      50: '#e4fee7',
      100: '#baf8c0',
      200: '#8ef398',
      300: '#63ed6f',
      400: '#3ce847',
      500: '#27ce30',
      600: '#1da125',
      700: '#13731a',
      800: '#07450e',
      900: '#001801',
    },
    lightdark: {
      50: '#e0fcf0',
      100: '#beeeda',
      200: '#9ae2c3',
      300: '#74d5ac',
      400: '#4fca94',
      500: '#35b07b',
      600: '#27895f',
      700: '#196243',
      800: '#093c27',
      900: '#00160a',
    },
    lightneutral: {
      50: '#e3fee9',
      100: '#baf7c8',
      200: '#8fefa5',
      300: '#65e982',
      400: '#3ce360',
      500: '#24c946',
      600: '#1a9c36',
      700: '#107026',
      800: '#044315',
      900: '#001803',
    },
    dark: {
      50: '#eef0fb',
      100: '#ced1e4',
      200: '#aeb2cf',
      300: '#8d93bc',
      400: '#6d74a9',
      500: '#535a90',
      600: '#404670',
      700: '#2e3250',
      800: '#1b1e31',
      900: '#080a15',
    },
  },
  fonts: {
    test: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  // Components
  components: {
    Button: {
      // Customize button styles here
    },
    Input: {
      // Customize input styles here
    },
    // Add more component customizations here
  },
})

export default theme
