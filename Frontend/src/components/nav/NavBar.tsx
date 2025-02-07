// React & Hooks
import { useState } from "react";
// Components
import MiniUser from "../user/MiniUser";
import PostModal from "../tweets/PostModal";
// Material-UI components
import { Box, Button } from "@mui/material";
// Material-UI icons
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
// Logo components
import { Bookmarks, Communities, Explore, Home, Jobs, Messages, More, Notifications, Profile, Twitter, VerifiedOrgs } from "../../assets/icons/Logos";
// Styles
import { button, main, navBar, navItem, buttonIcon } from "./style";

/**
 * NavBar component
 * 
 * @returns {JSX.Element} The rendered NavBar component
 */

export default function NavBar() {
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
  const navItemsMap: JSX.Element[] = navItems.map((item) => (
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
          <Button variant="contained" sx={button} onClick={handleOpen}>
            <HistoryEduIcon sx={buttonIcon} />
            <span>Post</span>
          </Button>
        </Box>
        <Box sx={{ margin: '1rem', '@media (max-width: 1200px)': { display: 'none' } }}>
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

  const dinamicIcon = () => {
    const icon =
      title === 'Home' ? <Home size={26.25} fill={'#fff'} /> :
        title === 'Explore' ? <Explore size={26.25} fill={'#fff'} /> :
          title === 'Notifications' ? <Notifications size={26.25} fill={'#fff'} /> :
            title === 'Messages' ? <Messages size={26.25} fill={'#fff'} /> :
              title === 'Bookmarks' ? <Bookmarks size={26.25} fill={'#fff'} /> :
                title === 'Jobs' ? <Jobs size={26.25} fill={'#fff'} /> :
                  title === 'Communities' ? <Communities size={26.25} fill={'#fff'} /> :
                    title === 'VerifiedOrgs' ? <VerifiedOrgs size={26.25} fill={'#fff'} /> :
                      title === 'Profile' ? <Profile size={26.25} fill={'#fff'} /> :
                        title === 'More' ? <More size={26.25} fill={'#fff'} /> : null;
    return icon;
  };

  const handlChangSelectedT = isSelected ? <span><strong>{title}</strong> </span> : <span>{title}</span>;

  return (
    <Box sx={navItem} onClick={handleClick}>
      {dinamicIcon()}
      <Box sx={{ '@media (max-width: 1200px)': { display: 'none' } }}>
        {handlChangSelectedT}
      </Box>
    </Box>
  );
};