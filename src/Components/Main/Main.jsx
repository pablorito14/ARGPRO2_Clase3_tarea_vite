import React from 'react';
import './Main.css';
import { Grid, GridItem,Text } from '@chakra-ui/react';

const Main = ({products}) => {
  console.log(products)
  return(
    <div className='main'>Main</div>
    // <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(3,1fr)'}} gap="5">
    //   {products.map((product) => 
    //       <GridItem key={product.id}>
    //         <Text>{product.nombre}</Text>
    //       </GridItem> 
      
    //   )}
      
    //   <GridItem key="id1" bg='red'>asdasda</GridItem>
    //   <GridItem key="id2" bg='orange'>asdasda</GridItem>
    //   <GridItem key="id3" bg="yellow">asdasda</GridItem> 
    // </Grid>
  )
}

export { Main }