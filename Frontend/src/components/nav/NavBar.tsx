// React & Hooks
import { useState, SyntheticEvent } from "react";
// Components
import NavItem from "./NavItem";
import MiniUser from "../user/MiniUser";
// Material-UI components
import { Box, Button, Tab, Tabs } from "@mui/material";
// Logo components
import { Xlogo } from "../../assets/icons/Logos";
// Styles
import { navStyles } from "./style";
import PostModal from "../postTweet/PostModal";
/**
 * NavBar component
 * 
 * @returns {JSX.Element} The rendered NavBar component
 */

export function NavBar() {
  // States
  const [selectedTitle, setSelectedTitle] = useState<string>("Home"); // Selected nav item
  const [openModal, setOpenModal] = useState(false);
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
  // Modal Handlers
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Box sx={navStyles.main}>
        <Box sx={navStyles.navBar}>
          <Box sx={navStyles.navItem}>
            <Xlogo size={26.25} fill="#fff" />
          </Box>
          {/* Map of NavItems, this build the navbar by itsel */}
          {navItems.map((item) => (
            <NavItem
              key={item}
              title={item}
              isSelected={selectedTitle === item}
              onSelect={setSelectedTitle}
            />
          ))}
          <Button variant="contained" sx={navStyles.button} onClick={handleOpen}>Post</Button>
        </Box>
        <MiniUser isVerified={true} username="LauGD3012" aka="LauGD" isOtherUser={false} />
      </Box>
      {/* TopNav & post tweet modal */}
      <TopNavBar />
      <PostModal open={openModal} handleClose={handleClose}/>
    </>
  );
}
/**
 * TopNavBar component
 * 
 * @returns {JSX.Element} The rendered NavBar component
 */
function TopNavBar() {
  const [selectedTitle, setSelectedTitle] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) =>  setSelectedTitle(newValue); 

  return (
    <Box sx={navStyles.topNavBar}>
      <Tabs
        value={selectedTitle}
        textColor="inherit"
        onChange={handleChange}
        variant="standard"
      >
        <Tab label="For you" sx={{ ...navStyles.tabs, fontWeight: selectedTitle === 0 ? '500' : 'normal' }} />
        <Tab label="Following" sx={{ ...navStyles.tabs, fontWeight: selectedTitle === 0 ? 'normal' : '500' }} />
      </Tabs>
    </Box>
  );
}
