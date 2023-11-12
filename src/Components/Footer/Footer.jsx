import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Box, Container, Text,Link } from '@chakra-ui/react';

const Footer = () => {
  return(
    <>
      <Box as='footer' color='#ffffff' bg='#212529' pos='' w='full' bottom='0' left='0' paddingY='.5rem'>
        <Container>
        
          <Text >Pablo Rito - {(new Date().getFullYear())}</Text>
          <Box display='flex' gap='.5rem'>
            <Link _hover={{ opacity: 0.5 }}>
              <FontAwesomeIcon icon={faTwitter} size='xl' color='#55acee' />
            </Link>
            <Link _hover={{ opacity: 0.5 }}>
              <FontAwesomeIcon icon={faWhatsapp} size='xl' color='#4dc247'/>
            </Link>
          </Box>

        </Container>
      </Box>
    </>
  )
}

export { Footer }