// React & Hooks
import { useState, SyntheticEvent } from "react";
// Components
import MiniUser from "../user/MiniUser";
import PostModal from "../postTweet/PostModal";
import PostArea from "../postTweet/postAreaComponent";
// Material-UI components
import { Box, Button, Tab, Tabs } from "@mui/material";
// Logo components
import { Bookmarks, Communities, Explore, Home, Jobs, Messages, More, Notifications, Profile, Twitter, VerifiedOrgs } from "../../assets/icons/Logos";
// Styles
import { navStyles } from "./style";

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
    "Bookmarks",
    "Jobs",
    "Communities",
    "VerifiedOrgs",
    "Profile",
    "More",
  ];

  // Map of items, this build the nav bar by itself
  const navItemsMap = navItems.map((item) => (
    <NavItem
      key={item}
      title={item}
      isSelected={selectedTitle === item}
      onSelect={setSelectedTitle}
    />
  ))

  // Modal Handlers
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Box sx={navStyles.main}>
        <Box sx={navStyles.navBar}>
          <Box sx={navStyles.navItem}>
            <Twitter size={35} fill="#1da1f2" />
          </Box>
          {navItemsMap}
          <Button variant="contained" sx={navStyles.button} onClick={handleOpen}>Post</Button>
        </Box>
        <MiniUser isVerified={true} username="LauGD3012" aka="LauGD" isOtherUser={false} />
      </Box>
      {/* TopNav & post tweet modal */}
      <TopNavBar />
      <PostModal open={openModal} handleClose={handleClose} />
    </>
  );
};

/**
 * NavItem component
 * 
 * @param {string} title - The title of the nav item
 * @param {boolean} isSelected - Whether the nav item is selected
 * @param {function} onSelect - Function to call when the nav item is selected
 * @returns {JSX.Element} The rendered NavItem component
 */
export function NavItem({ title, isSelected, onSelect }: NavItemProps) {
  const handleClick = () => { onSelect(title); };

  return (
    <Box sx={navStyles.navItem} onClick={handleClick}>
      {/* Dimamic Icon */}
      {title === "Home" && <Home size={26.25} fill={"#fff"} />}
      {title === "Explore" && <Explore size={26.25} fill={"#fff"} />}
      {title === "Notifications" && <Notifications size={26.25} fill={"#fff"} />}
      {title === "Messages" && <Messages size={26.25} fill={"#fff"} />}
      {title === "Bookmarks" && <Bookmarks size={26.25} fill={"#fff"} />}
      {title === "Jobs" && <Jobs size={26.25} fill={"#fff"} />}
      {title === "Communities" && <Communities size={26.25} fill={"#fff"} />}
      {title === "VerifiedOrgs" && <VerifiedOrgs size={26.25} fill={"#fff"} />}
      {title === "Profile" && <Profile size={26.25} fill={"#fff"} />}
      {title === "More" && <More size={26.25} fill={"#fff"} />}

      {isSelected ? <span> <strong>{title}</strong> </span> : <span>{title}</span>}
    </Box>
  );
};

/**
 * TopNavBar component
 * 
 * @returns {JSX.Element} The rendered NavBar component
 */
function TopNavBar() {
  const [selectedTitle, setSelectedTitle] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => setSelectedTitle(newValue);

  return (
    <>
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
        <PostArea topSide={false} />
      </Box>
    </>
  );
};