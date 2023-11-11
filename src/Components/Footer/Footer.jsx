import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Box, Container, Text } from '@chakra-ui/react';

const Footer = () => {
  return(
    <div>
      <Box as='footer' color='#ffffff' bg='#212529' pos='sticky' w='full' bottom='0' left='0' paddingY='.5rem'>
        <Container>
        
          <Text >Pablo Rito - {(new Date().getFullYear())}</Text>
          <Box display='flex' gap='.5rem'>
            <FontAwesomeIcon icon={faTwitter} size='xl' color='#55acee'/>
            <FontAwesomeIcon icon={faWhatsapp} size='xl' color='#4dc247'/>
            <FontAwesomeIcon icon={faLinkedin} size='xl' color='#007bb5'/>
          </Box>

        </Container>

        

      </Box>
    </div>
  )
}

export { Footer }