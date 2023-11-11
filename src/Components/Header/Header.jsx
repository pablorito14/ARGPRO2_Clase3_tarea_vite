import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Button, Drawer, DrawerBody, DrawerOverlay, DrawerContent,
  useDisclosure, Box, Container, Link, Heading } from '@chakra-ui/react'

const NavLinks = () => {
  return (
    <>
      <Link href='/' variant='navLinks'> Inicio</Link>
      <Link href='/' variant='navLinks'> Productos</Link>
      <Link href='/' variant='navLinks'> Contacto</Link>
    </>
  )
}

const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
    <>
      <Box as='header' color='#ffffff' bg='#212529'>
        <Container py='.5rem'>
          <Heading py={1.5} fontWeight='500' >
            <Link href='/' fontSize={{base: '1.75rem',md:'2rem'}} variant='logo'> RitoStore</Link>
          </Heading>
          <Box order={{md:1}} display='flex' gap='1.5rem' alignItems='center'>
            <Link href='/' variant='navLinks' ms={2} >
              <FontAwesomeIcon icon={faCartShopping} size='lg' /> 
            </Link>
            
            <Button _hover={{color:'whitesmoke'}} display={{md:'none'}}  _active={{bg:'#212529'}}
                    borderColor='#ffffff20' color='#ffffff8c' variant='outline' onClick={onOpen}>
              <FontAwesomeIcon icon={faBars} size='2xl' />
            </Button>
          </Box>
          <Box as='nav' order={{md:0}} w="100%" display={{base:'none',md:'flex'}} justifyContent="end" px={4} gap={4}>
            <NavLinks />
          </Box>
        </Container>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        isFullHeight={false}
      >
        <DrawerOverlay />
        <DrawerContent mt='68px'>
          <DrawerBody px='1rem' bg='#212529' display='flex' flexDirection='column'>
            <NavLinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { Header }