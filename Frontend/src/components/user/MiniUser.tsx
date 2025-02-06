// Material UI component
import { Avatar, Box, Button } from "@mui/material";
// styles
import { avAndtext, miniUser, spaceBox, textBox, verifiedBox, cardStyles, cardVariant } from "./styles";
// Material UI icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VerifiedIcon from '@mui/icons-material/Verified';
import { button } from "../tweets/style";

/**
 * MiniUSer component
 * 
 * @returns {JSX.Element} The rendered MiniUser component
 */
export default function MiniUser({ isVerified, username, aka, isOtherUser }: MiniUserProps) {
  const buttonOrIcon = isOtherUser ? <Button sx={button}>Follow</Button> : <MoreHorizIcon sx={{ color: "#fff" }} />;

  const verifiedUserUI = isVerified ? (
    <VerifiedIcon sx={{ color: "#1e9bf0", width: '18px', height: '18px' }} />
  ) : (
    <Box sx={spaceBox} />
  );

  const cStyles = isOtherUser ? cardStyles : miniUser;
  const minUserBox = isOtherUser ? cardVariant : miniUser;


  return (
    <Box sx={cStyles}>
      <Box sx={minUserBox}>
        <Box sx={avAndtext}>
          <Avatar
            alt="User Avatar"
            src="https://x.com/BFrog__/photo"
            sx={{ width: 40, height: 40 }}
          />
          <Box sx={textBox}>
            <Box sx={verifiedBox}>
              <strong >{aka}</strong>
              {verifiedUserUI}
            </Box>
            <span style={{ lineHeight: '18px', fontSize: '13px', color: '#71767b' }}>@{username}</span>
          </Box>
        </Box>
        {buttonOrIcon}
      </Box>
    </Box>
  );
};