// SVGs: Frontend/src/assets/icons/Logos.tsx  
import { Home, Explore, Notifications, Messages, Grok, Bookmarks, Jobs, Communities, VerifiedOrgs, Profile, More } from '../../assets/icons/Logos'
// Styles
import { navStyles } from './style';
// Materiaul-UI components
import Box from '@mui/material/Box';
// Types
type NavItemProps = {
  title: string;
  isSelected: boolean;
  onSelect: (title: string) => void;
};
/**
 * NavItem component
 * 
 * @param {string} title - The title of the nav item
 * @param {boolean} isSelected - Whether the nav item is selected
 * @param {function} onSelect - Function to call when the nav item is selected
 * @returns {JSX.Element} The rendered NavItem component
 */
export default function NavItem({ title, isSelected, onSelect }: NavItemProps) {
  const handleClick = () => { onSelect(title); };

  return (
    <Box sx={navStyles.navItem} onClick={handleClick}>
      {/* Dimamic Icon */}
      { title === "Home" && <Home size={26.25} fill={"#fff"} /> }
      { title === "Explore" && <Explore size={26.25} fill={"#fff"} /> }
      { title === "Notifications" && <Notifications size={26.25} fill={"#fff"} /> }
      { title === "Messages" && <Messages size={26.25} fill={"#fff"} /> }
      { title === "Grok" && <Grok size={26.25} fill={"#fff"} /> }
      { title === "Bookmarks" && <Bookmarks size={26.25} fill={"#fff"} /> }
      { title === "Jobs" && <Jobs size={26.25} fill={"#fff"} /> }
      { title === "Communities" && <Communities size={26.25} fill={"#fff"} /> }
      { title === "VerifiedOrgs" && <VerifiedOrgs size={26.25} fill={"#fff"} /> }
      { title === "Profile" && <Profile size={26.25} fill={"#fff"} /> }
      { title === "More" && <More size={26.25} fill={"#fff"} /> }

      { isSelected ? <span> <strong>{title}</strong> </span> : <span>{title}</span> }
    </Box>
  );
}