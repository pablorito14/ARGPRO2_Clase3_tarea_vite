import { defineStyleConfig, extendTheme } from '@chakra-ui/react'
import "@fontsource/russo-one";

// configuracion de breakpoints para "copiar" el estilo hecho en bootstrap
const breakpoints = {
  base: '0px',//0px
  sm: '576px',// 360px -> 576px
  md: '768px', // 576px -> 768px
  lg: '992px', // 744px -> 992px
  xl: '1200px', // 960px -> 1200px
  '2xl': '1400px', // 1152px -> 1400px
}

const Container = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxW:{
      sm:'540px',
      md:'720px',
      lg:'960px', 
      xl:'1140px', 
      "2xl":'1320px'
    }
  },
})

const fonts = {
  'russo-one':'Russo One'
}

const Link = defineStyleConfig({
  baseStyle:{
    _hover: {
      textDecoration: 'none',
    },
    py: {
      base: '.5rem',
      md: 0
    },
    fontSize:{
      base: 'xl',
      md: 'md'
    }
  },
  variants:{
    'logo':{
      color: '#ffffff',
       _hover: {color:'#ffffff8c'},
       fontFamily:'russo-one'
    },
    'navLinks':{
      color: '#ffffff',
       _hover: {color:'#ffffff8c'},
       
    },
    default:{
      color: 'blue',
      _hover: { color: 'red' }
    }
  },
  defaultProps:{
    variant:'default'
  }
})

const theme = extendTheme({ breakpoints,fonts, components: {Container,Link}});

export default theme