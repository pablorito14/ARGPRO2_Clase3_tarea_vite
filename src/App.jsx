import './App.css'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'

// Custom theme
import theme from './Theme';

function App() {
  return (
    <>
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
      <Footer /> 
    </ChakraProvider>
    </>
  )
}

export default App
