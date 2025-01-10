// React & Hooks
import React, { useState, SyntheticEvent } from "react";
// Components
import NavItem from "./NavItem";
import MiniUser from "../user/MiniUser";
// Material-UI components
import { Box, Button, Tab, Tabs } from "@mui/material";
// Logo components
import { Xlogo } from "../../assets/icons/Logos";
// Styles
import { navStyles } from "./style";
/**
 * NavBar component
 * 
 * @returns {JSX.Element} The rendered NavBar component
 */

export function NavBar() {
  // States
  const [selectedTitle, setSelectedTitle] = useState<string>("Home"); // Estado centralizado para la selección
  // List of nav items
  const navItems = [
    "Home",
    "Explore",
    "Notifications",
    "Messages",
    "Grok",
    "Bookmarks",
    "Jobs",
    "Communities",
    "VerifiedOrgs",
    "Profile",
    "More",
  ];

  return (
    <>
      <Box sx={navStyles.main}>
        <Box sx={navStyles.navBar}>
          <Box sx={navStyles.navItem}>
            <Xlogo size={26.25} fill="#fff" />
          </Box>
          {navItems.map((item) => (
            <NavItem
              key={item}
              title={item}
              isSelected={selectedTitle === item}
              onSelect={setSelectedTitle}
            />
          ))}
          <Button variant="contained" sx={navStyles.button}>Post</Button>
        </Box>
        <MiniUser isVerified={false} username="LauGD3012" aka="LauGD" isOtherUser={false} />
      </Box>
      <TopNavBar />
    </>
  );
}

function TopNavBar() {
  const [selectedTitle, setSelectedTitle] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setSelectedTitle(newValue);
  }

  return (
    <Box sx={navStyles.topNavBar}>
      <Tabs
        value={selectedTitle}
        textColor="inherit"
        onChange={handleChange}
        variant="standard"
        sx={{
          '& .MuiTabs-indicator': {
            height: '3px',
            width: '190%',
            borderRadius: '5px',
            backgroundColor: '#1e9bf0',
          },
        }}
      >
        <Tab label="For you" sx={{ ...navStyles.tabs, fontWeight: selectedTitle === 0 ? '500' : 'normal' }} />
        <Tab label="Following" sx={{ ...navStyles.tabs, fontWeight: selectedTitle === 0 ? 'normal' : '500' }} />
      </Tabs>
    </Box>
  );
}
