import React from "react";
import Button from '@mui/material/Button';
import {
Box,
Typography
} from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{
      mt: 10,
      bottom: 0,
      color: 'white',
    }}>
      <Box sx={{
        background: 'linear-gradient(50deg, rgba(167,139,250,1) 0%, rgba(167,139,250,1) 35%, rgba(91,33,182,1) 100%)',
        textAlign: {
          xs: 'center',
          md: 'left'
        },
        p: {
          xs: 3,
          md: 8,
        }
      }}>
        <Typography sx={{
          mb: 2,
          fontSize: '2.25rem',
          fontFamily: 'Cinzel, serif',
          fontWeight: 700
        }}>Join The Community</Typography>
        <Typography sx={{
          fontSize: '1.5rem',
          textAlign: {
            xs: 'center',
            md: 'justify'
          },
          width: {
            xs: '100%',
            md: '50%',
            lg: '40%',
            xl: '30%',
          },
          mb: 3
        }}>The Assembly Discord community is growing daily. Join now to have your say in the future of the project.</Typography>
        <Button variant="contained" color="error" size="large" >Join The Discord</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        alignItems: 'center',
        width: '100%',
        height: '196px',
        bgcolor: '#102027',
        borderBottom: 5,
        borderColor:'error.main' }}>
        <Box sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          justifyContent: {
            xs: 'space-between',
            md: 'center',
          },
          py: 3,
          px: 8 }}>
          <Typography sx={{
            order: {
              xs: 2,
              md: 1
            }
          }}></Typography>
          <Typography sx={{ 
            flexGrow: 1,
            order: {
              xs: 1,
              md: 2
            }
          }}>The Assembly</Typography>
          <Typography sx={{ order: 3 }}>© 2021 the Assembly</Typography>
        </Box>
      </Box>
    </Box>
  );
};