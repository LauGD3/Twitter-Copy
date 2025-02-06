// React & Hooks
import { useState } from "react";
// Components
import MiniUser from "../user/MiniUser";
import PostModal from "../tweets/PostModal";
// Material-UI components
import { Box, Button } from "@mui/material";
// Logo components
import { Bookmarks, Communities, Explore, Home, Jobs, Messages, More, Notifications, Profile, Twitter, VerifiedOrgs } from "../../assets/icons/Logos";
// Styles
import { button, main, navBar, navItem } from "./style";

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
      <Box sx={main}>
        <Box sx={navBar}>
          <Box sx={navItem}>
            <Twitter size={35} fill="#1da1f2" />
          </Box>
          {navItemsMap}
          <Button variant="contained" sx={button} onClick={handleOpen}>Post</Button>
        </Box>
        <Box sx={{margin: '1rem'}}>
          <MiniUser isVerified={true} username="LauGD3012" aka="LauGD" isOtherUser={false} />
        </Box>
      </Box>
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
    <Box sx={navItem} onClick={handleClick}>
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