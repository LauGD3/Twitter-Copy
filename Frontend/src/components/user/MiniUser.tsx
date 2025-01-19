// Material UI component
import { Avatar, Box, Button } from "@mui/material";
// styles
import { userStyles } from "./styles";
// Material UI icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VerifiedIcon from '@mui/icons-material/Verified';
// types
type MiniUserProps = {
  isVerified: boolean;
  username: string;
  aka: string;
  isOtherUser: boolean;
}
/**
 * MiniUSer component
 * 
 * @returns {JSX.Element} The rendered MiniUser component
 */
export default function MiniUser({ isVerified, username, aka, isOtherUser}: MiniUserProps) {
  return (
    <Box sx={userStyles.miniUser}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Box sx={userStyles.avAndtext}>
          <Avatar
            alt="User Avatar"
            src="https://x.com/BFrog__/photo"
            sx={{ width: 40, height: 40 }}
          />
          <Box sx={userStyles.textBox}>
            <Box sx={userStyles.verifiedBox}>
              <strong >{aka}</strong>
              {isVerified ? (
                <VerifiedIcon sx={{ color: "#1e9bf0", width: '18px', height: '18px' }} />
              ) : (
                <Box sx={userStyles.spaceBox} />
              )}
            </Box>
            <span style={{ lineHeight: '18px', fontSize: '13px', color: '#71767b' }}>@{username}</span>
          </Box>
        </Box>
        {isOtherUser ? <Button>Follow</Button> : <MoreHorizIcon sx={{ color: "#fff" }} />}
      </Box>
    </Box>
  );
}
