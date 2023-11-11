import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Box, Container, Text } from '@chakra-ui/react';

const Footer = () => {
  return(
    <div>
      <Box as='footer' color='#ffffff' bg='#212529' pos='fixed' w='100%' bottom='0' left='0' paddingY='.5rem'>
        {/* <Container maxW={{sm:'540px', md:'720', lg:'960px', xl:'1140px', "2xl":'1320px'}} 
                    display='flex' justifyContent='space-between' alignItems='center'> */}
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