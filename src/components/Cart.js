import React from 'react';
import { Button, Card, Grid, Typography, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import Shopping from '../svg/Shopping';
export default function Cart({productInfos}) {
  const theme = useTheme()
  const width = useMediaQuery(theme.breakpoints.up('sm'))
  console.log(productInfos)
  return (
      <Card sx={{borderRadius:3,boxShadow:'none',maxWidth:['375px','600px'],height:['none',475],mt:5,maxHeight:['100%','none']}}>
        <Grid container sx={{height:'100%'}} flexDirection={'row'}>
          <Grid item sm={6} sx={{height:'100%'}}>
            {
              width 
              ?
              <Box 
                component='img'
                src={productInfos.img.desktopSrc}
                sx={{width:'100%',height:'100%'}}
              />
              :
              <Box 
                component='img'
                src={productInfos.img.mobileSrc}
                sx={{width:'100%',height:'100%'}}
              />
            }
          </Grid>
          <Grid item sm={6} sx={{minHeight:['none','475px']}}>
            <Grid container spacing={4} sx={{p:[3,4],fontWeight:'700',justifyContent:'space-between',height:'100%'}}> 
              <Grid item>
                <Grid item>
                  <Typography variant='h6' sx={{fontWeight:500,fontSize:'12px',color:theme.palette.primary.text,letterSpacing:'6px'}}>
                    {productInfos.product}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='h4' sx={{pt:[4,3]}}>
                    {productInfos.title}
                  </Typography>
                </Grid>
              </Grid>
              {
                  productInfos.description &&
                  <Grid item>
                    <Typography variant='body2'>
                      {productInfos.description}
                    </Typography>
                  </Grid>
              }
              <Grid item sx={{width:'100%'}} container flexDirection={'column'} alignSelf={'flex-end'}>
                <Grid item sx={{gap:'24px',pt:[4+(!productInfos.description ? 16.445 : 0),(!productInfos.description ? 16.445 : 0)]}} container alignItems={'center'}>
                  <Grid>
                    <Typography variant='h4' sx={{color:theme.palette.price}}>
                      {productInfos.discountPrice ? productInfos.discountPrice : productInfos.price}
                    </Typography>
                  </Grid>
                  {
                      productInfos.discountPrice &&
                      <Grid>
                        <Typography variant='body2' sx={{textDecoration:'line-through',fontSize:'12px'}}>
                          {productInfos.price}
                        </Typography>
                      </Grid>
                  }
                </Grid>
                <Grid item xs={12} sx={{pt:[3,4]}}>
                  <Button variant='contained' disableTouchRipple sx={{textTransform:'none',height:48,borderRadius:2,gap:'14px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Shopping />
                    <Typography variant='body2' sx={{color:'white',fontSize:'14px',fontWeight:700}}>
                      Add to Cart
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    
  );
}