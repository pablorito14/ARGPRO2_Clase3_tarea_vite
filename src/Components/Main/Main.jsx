import React, { useState } from 'react';
import './Main.css';
import { Box, Container } from '@chakra-ui/react';
import { ProdCard } from '../ProdCard/ProdCard';
import { motion } from 'framer-motion';

const Main = () => {
  const productos = [
    {
      id:1,
      nombre: 'SMART LED NANO CELL TV LG 50 PULGADAS 4K UHD',
      nombreCorto: 'LG 50" NANO LED',
      descripcion: 'Televisor smart LED de 50". Resolucion UHD nano cell 4K (3840x2160). Procesador Inteligente a5 generacion 5. Salida de audio 20 W (10 por canal). Conexiones: Wifi. Bluetooth 5.0. 4 HDMI 2.0. 2 USB 2.0. LAN. Sintonizador TDA. Soporte VESA 200x200 mm. Sistema operativo webOS. Modo de imagen: 9 modos (Vivid, Standard, Eco, Cinema, Sports, Game, Filmmaker, (ISF)Expert(Bright Room), (ISF)Expert(Dark Room)). Medidas con base (alt-anch-prof) 78.1x123.3x25.5 cm. Peso con base 16.7 kg. Incluye: Cable de alimentacion, base y control remoto Magic.',
      precio: 389999,
      sku: 'E8OTSZ1LL',
      stock: 3,
      img: 'https://medias.musimundo.com/medias/size515-149053-01.jpg?context=bWFzdGVyfGltYWdlc3w3MzM3NHxpbWFnZS9qcGVnfGhkZi9oODgvMTA0ODY0MTkxNjExMTgvc2l6ZTUxNV8xNDkwNTNfMDEuanBnfDhmMDhmZGM0OTIzZGFlODgzYTY2ZGI0ZTJiZjM4ZDk4YjJmODU5MjFjNTc1ZGY0Mjk5Nzg5OGYxYzQyNWFhMTU'
    },
    {
      id:2,
      nombre: 'SMART NEO QLED TV SAMSUNG 50 PULGADAS 4K UHD',
      nombreCorto: 'Samsung 50" QLED',
      descripcion: 'Televisor gaming Smart, Neo QLED con pantalla de 50", UHD 4K (3840x2160) Formato de pantalla wide. Tasa de refresco 144 Hz (VRR). Procesador Neo Quantum 4K. Mil millones de colores. PQI (indice de calidad de la imagen) 4500. Quantum HDR 24x. HLG. Contraste: Tecnologia de Microiluminacion Ultrafina, Volumen de color al 100 % con Quantum Dot. Deteccion de brillo y color. Atenuacion UHD definitiva. Motion Xcelerator Turbo Pro. LED Clear Motion. Reduccion de ruido. Calibracion experta. Modo cineasta (FMM). Audio Dolby Digital Plus MS12 2ch. Potencia 40W (RMS). Amplificador de voz activo. Sonido 3D OTS Lite. Woofer. Enlace para habitaciones multiples. Audio bluetooth. Soporte de audio doble (Bluetooth). Sistema operativo Tizen. Interaccion de voz de campo lejano. Pantalla multiple (hasta 2 pantallas). Soporte de camara movil. Reproductor de video 360. Bluetooth 5.2. Wi Fi 5. Game Motion Plus. FreeSync Premium Pro. HGiG. Conectividad: 4 HDMI . 2 USB. Internet (LAN). Salida de audio deigital (optica). Entrada RF (entrada terrestre/por cable/por satelite) 1/0/0. eARC. Control remoto inteligente de Samsung (no lleva pilas, se carga por luz solar/ambiente).',
      precio: 678299,
      sku: 'E8OTAA22',
      stock: 0,
      img: 'https://medias.musimundo.com/medias/00602004-147028-147028-01-147028-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w0NTkyMXxpbWFnZS9qcGVnfGgxZC9oMjUvMTA0NTg1NDYxNDMyNjIvMDA2MDIwMDQtMTQ3MDI4LTE0NzAyOF8wMS0xNDcwMjhfMDEuanBnX3NpemU1MTV8ZjhmYzgyZGEwYzg3MzJkNGJiMmRkNzYwNjZjNGQ4N2NmMDU0YTQ1ZWE0NGFhZmJmZGFiMjBlMTg1OWYwNjU2Nw'
    }  
  ]
  
  // const producto = productos[0]; // mensaje de ultimas unidades
  const producto = productos[0]; // stock no disponible (boton deshabilitado, precio en color mas oscuro)
  const { nombre,descripcion,precio, sku, stock, img } = producto;

  return (
    <>
    <Box bgImage="linear-gradient(rgb(33,37,41),#0000001c,rgb(33,37,41)) ,url('./background.webp')" 
          bgPosition='50% 50%' bgRepeat='no-repeat' backgroundSize='cover'
          display='flex' alignItems='center' flexDirection='column' 
          minH={{ base:'calc(100vh - 69px -62px)',md:'calc(100vh - 73px - 41px)' }} >
      
      <Container my='auto' py='1rem'>
        <motion.div 
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}>
          <ProdCard nombre={nombre} descripcion={descripcion} precio={precio} sku={sku} stock={stock} img={img}/>
        </motion.div>
      </Container>
    </Box>
    </>
  )
}

export { Main }