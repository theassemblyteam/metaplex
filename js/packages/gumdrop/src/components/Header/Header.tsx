import React from "react";
// import {
//   Link,
// } from "react-router-dom";
import {
  Box,
  // Button,
  // Divider,
  // Drawer,
  // List,
  // ListItem,
  // ListItemButton,
  // ListItemText,
  // Stack,
} from "@mui/material";
// import HomeIcon from '@mui/icons-material/Home';
// import MenuIcon from '@mui/icons-material/Menu';

import { Settings } from "../Settings";

export const Header = ({ narrow }: { narrow: boolean }) => {
  const navs = [
    // {
    //   href: `/gumdrop/`,
    //   innerNarrow: "About",
    //   inner: <HomeIcon />,
    // },
    // {
    //   href: `/gumdrop/create`,
    //   inner: "Create",
    // },
    // {
    //   href: `/claim`,
    //   inner: "Claim",
    // },
    // {
    //   href: `/gumdrop/close`,
    //   inner: "Close",
    // },
    {
      inner: "The Assembly"
    }
  ];

  // const [drawerOpen, setDrawerOpen] = React.useState(false);

  // const toggleDrawer = (open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setDrawerOpen(open);
  // };

  return (
    <Box
      sx={{
        height: "8rem",
        display: "flex",
        overflow: "hidden",
        p: 5,
        alignItems: 'center'
      }}
    >
      {navs.map((nav, idx) => {
        return (
          <Box key={idx} style={{fontSize: '1.5rem', lineHeight: '2.5rem' }}>
            <img src={process.env.PUBLIC_URL + '/assets/logo.webp'} style={{ width: '3rem'}} />
            {nav.inner}</Box>
        );
      })}
      {/* {narrow
        ? (
          <React.Fragment>
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Button>
            <Drawer
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Gumdrop"
                      primaryTypographyProps={{
                        fontSize: "1.2rem",
                        fontWeight: 'medium',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItem>
                  <Divider />
                  {navs.map((nav, idx) => {
                    return (
                      // <Link to={nav.href} key={idx} style={{color: "inherit"}}>
                      //   <ListItemButton>
                      //     {nav.innerNarrow || nav.inner}
                      //   </ListItemButton>
                      // </Link>
                      <ListItem key={idx}>
                        {nav.inner}
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </React.Fragment>
        )
        : (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginLeft: "36px",
            }}
          >
            {navs.map((nav, idx) => {
              return (
                <Link to={nav.href} key={idx}>
                  <Button variant="outlined" style={{minWidth:0}}>
                    {nav.inner}
                  </Button>
                </Link>
              );
            })}
          </Stack>
        )
      } */}
      <Box sx={{ flexGrow: 1, minWidth: "36px" }}></Box>
      <Settings narrow={narrow} />
    </Box>
  );
};
