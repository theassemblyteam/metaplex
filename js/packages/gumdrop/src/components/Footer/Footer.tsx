import React from "react";
import {
Box,
Typography
} from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ mt: 28, bottom: 0, width: '100%', bgcolor: 'text.disabled', borderBottom: 5, borderColor: 'error.main' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', p:8 }}>
        <Typography></Typography>
        <Typography sx={{ flexGrow: 1 }}>The Assembly</Typography>
        <Typography>© 2021 the Assembly</Typography>
      </Box>
    </Box>
  );
};