import React from 'react';
import { Button, Card, Grid, Typography, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';

function App() {
  const theme = useTheme()
  const width = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <Grid sx={{maxWidth:'1440px',minHeight:'800px',display:'flex',}} justifyContent={'center'} alignItems={'center'}>
      <Card sx={{maxWidth:'600px',borderRadius:3,boxShadow:'none','@media (max-width: 599.95px)':{maxWidth:'375px'},'@media (min-width: 600px)': {maxHeight:'475px'}}}>
        <Grid container flexDirection={'row'}>
          <Grid item sm={6}>
            {
              width 
              ?
              <Box 
                component='img'
                src='./images/image-product-desktop.jpg'
                sx={{width:'100%','@media (min-width: 600px)':{height:'100%'}}}
              />
              :
              <Box 
                component='img'
                src='./images/image-product-mobile.jpg'
                sx={{width:'100%','@media (min-width: 600px)':{height:'100%'}}}
              />
            }
          </Grid>
          <Grid item sm={6} sx={{pl:0.50}}>
            <Grid container spacing={3} sx={{p:4,fontWeight:'700','@media (max-width: 599.95px)': {p:3}}}> 
              <Grid item>
                <Typography variant='h6' sx={{fontWeight:500,fontSize:'12px',color:'hsl(228, 12%, 48%)',letterSpacing:'6px'}}>
                  PERFUME
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h4'>
                  Gabrielle Essence Eau De Parfum
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2'>
                  A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                  Perfumer-Creator for the House of CHANEL.
                </Typography>
              </Grid>
              <Grid item sx={{gap:'24px','@media (max-width: 599.95px)':{pt:'56px !important'}}} container alignItems={'center'}>
                <Grid>
                  <Typography variant='h4' sx={{color:'hsl(158, 36%, 37%)'}}>
                    $149.99
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant='body2' sx={{textDecoration:'line-through',fontSize:'12px'}}>
                    $169.99
                  </Typography>

                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button variant='contained' sx={{textTransform:'none',height:48,borderRadius:2,gap:'14px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Shopping />
                  <Typography variant='body2' sx={{color:'white',fontSize:'14px',fontWeight:700}}>
                  Add to Card
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
    
  );
}

const Shopping = () => {
  return(
    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
  )
}
export default App;
