import React from 'react';
import { Grid } from '@mui/material';
import Cart from './components/Cart';

const infos = {
  img:{
    desktopSrc:'./images/image-product-desktop.jpg',
    mobileSrc:'./images/image-product-mobile.jpg'
  },
  product: 'PERFUME',
  title:'Gabrielle Essence Eau De Parfum',
  price:'$169.99',
  discountPrice:'$149.99'
}

function App() {
  console.log({...infos})
  return (
    <Grid>
      <Cart productInfos={infos} />
      <Cart productInfos={{...infos, description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'}}/>
    </Grid>
  );
}



export default App;
