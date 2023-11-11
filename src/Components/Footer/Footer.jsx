import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Box, Container, Text,Link } from '@chakra-ui/react';

const Footer = () => {
  return(
    <>
      <Box as='footer' color='#ffffff' bg='#212529' pos='' w='full' bottom='0' left='0' paddingY='.5rem'>
        <Container>
        
          <Text >Pablo Rito - {(new Date().getFullYear())}</Text>
          <Box display='flex' gap='.5rem'>
            <Link>
              <FontAwesomeIcon icon={faTwitter} size='xl' color='#55acee'/>
            </Link>
            <Link>
              <FontAwesomeIcon icon={faWhatsapp} size='xl' color='#4dc247'/>
            </Link>
            <Link>
              <FontAwesomeIcon icon={faLinkedin} size='xl' color='#007bb5'/>
            </Link>
          </Box>

        </Container>

        

      </Box>
    </>
  )
}

export { Footer }