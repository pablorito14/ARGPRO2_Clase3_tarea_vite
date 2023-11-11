import React from 'react';
import './ProdCard.css';
import { Box,Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Stock = ({stock}) => {
  if(stock === 0) { 
    return ( <Text fontWeight='700' fontSize='lg'>No disponible por el momento</Text>)
  }

  if(stock < 5) {
    return  (<Text fontWeight='700' fontSize='lg' color='red.400'>¡Ultimas {stock} unidades!</Text>)
  }

  return (<Text fontWeight='700' fontSize='lg' >{stock} unidades disponibles</Text>)
}

const ProdCard = ({nombre,descripcion,precio,sku,stock,img}) => {

  return(
      <Card my=".75rem"  direction={{ base: 'column', lg: 'row' }} 
            overflow='hidden' variant='outline' boxShadow='dark-lg'>
        <Box py='1rem' display='flex' alignItems='center' justifyContent={{base:'center',lg:'start'}} bg='red'>
          <Image src={img} alt={nombre}
                maxH={{base:'full',sm:'350px'}} maxW={{ base: '100%', sm: '350px' }} 
                />
        </Box>

        <Stack>
          <CardBody>
            <Heading size='lg'>{nombre}</Heading>

            <Text py='2'>{descripcion}</Text>
            <Text fontSize='sm' color='gray.400'>SKU: {sku}</Text>
            <Box display='flex' flexDirection='column' alignItems={{base: 'center',lg:'end'}}>
              <Stock stock={stock}/>
  
              <Box display='flex' flexDirection='column' alignItems={{base: 'center',lg:'end'}}>
                
                <Text fontWeight='700' fontSize='3xl' opacity={ (stock === 0) && '25%'}>Precio: $ {precio}</Text>
                <Button variant='solid' colorScheme='blue' textTransform='uppercase' fontSize={{base:'xl',md:'lg'}}
                        px={{base:'4.5rem', lg:'2.5rem'}} py={{base: '1.5rem', lg:'1rem'}}
                        fontWeight='500' fontFamily='Russo One' isDisabled={stock === 0}
                        bg='#212529' _hover={{ bg:'#5b788b' }}>
                  Agregar al carrito
                </Button>
              </Box>
            </Box>
          </CardBody>

        </Stack>
      </Card>
  )
}

export { ProdCard }