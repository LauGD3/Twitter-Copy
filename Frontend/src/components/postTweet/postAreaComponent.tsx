// React & Types
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { Avatar, Box, Button, Divider, Popover, TextField } from "@mui/material"
import { styles } from "./style";
// Material UI - Icons
import VerifiedIcon from '@mui/icons-material/Verified';
import PublicIcon from '@mui/icons-material/Public';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';

const MAX_CHARACTERS = 250;

/**
 * PostAreaComponent
 * 
 * @param {PostAreaComponent} props - The props for the component.
 * @param {boolean} props.topSide - Determines the display style of the component.
 * 
 * @returns {JSX.Element} The rendered PostAreaComponent.
 * 
 * @description This component renders a text area for posting tweets. It includes
 * an avatar, a multi-line text field for entering the tweet, and options for adding
 * images or GIFs. A progress circle shows the percentage of text used, and the 
 * remaining character count. When focused or if not on the top side, it displays 
 * reply options and a divider.
 */
export default function PostArea({ topSide }: PostAreaComponent) {
  const [text, setText] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [remaining, setRemaining] = useState(MAX_CHARACTERS);
  const isFocusedRef = useRef(false);
  const [, setRender] = useState(false);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const length = value.length;

    setText(value);
    setPercentage(Math.min((length / MAX_CHARACTERS) * 100, 100));
    setRemaining(MAX_CHARACTERS - length);
  };

  const handleFocus = () => {
    if (!isFocusedRef.current) {
      isFocusedRef.current = true;
      setRender((prev) => !prev);
    }
  };

  const fragmentOrBox = !topSide ? (
    isFocusedRef.current ? (
      <Box sx={{ paddingLeft: "4.1rem", marginTop: "1rem" }}>
        <ReplyOptionsModal />
        <Divider sx={{ backgroundColor: "#1e1e1e" }} />
      </Box>
    ) : null
  ) : (
    <>
      <ReplyOptionsModal />
      <Divider sx={{ backgroundColor: "#1e1e1e" }} />
    </>
  );

  const showCircle = text.length > 0 ? (
    <ProgressCircle percentage={percentage} remaining={remaining} />
  ) : (
    <Box sx={{ width: "30px" }}></Box>
  );

  const dimensionsBox = topSide
    ? { height: "8rem", width: "35rem" }
    : { paddingTop: "0.5rem", borderTop: "1px solid #2f3336" };

  const stylesBoxBottom = topSide
    ? styles.buttomContainer
    : {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 1rem",
      paddingBottom: "1rem",
      paddingLeft: "4.1rem",
    };

  return (
    <>
      <Box sx={dimensionsBox}>
        <Box sx={styles.bodyModal}>
          <Avatar
            alt="User Avatar"
            src="https://x.com/BFrog__/photo"
            sx={{ width: 40, height: 40 }}
          />
          <TextField
            multiline
            variant="standard"
            placeholder="What's Happening?!"
            InputProps={{ disableUnderline: true }}
            sx={styles.textField}
            maxRows={topSide ? 4 : 10}
            onChange={handleTextChange}
            onFocus={handleFocus}
          />
        </Box>
      </Box>
      {fragmentOrBox}
      <Box sx={stylesBoxBottom}>
        <Box sx={{ display: "flex" }}>
          <InsertPhotoOutlinedIcon sx={styles.buttomIcons} />
          <GifBoxOutlinedIcon sx={styles.buttomIcons} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {showCircle}
          <Button variant="contained" sx={styles.button}>
            Post
          </Button>
        </Box>
      </Box>
    </>
  );
};

/**
 * ReplyOptionsModal component
 * 
 * @returns {JSX.Element} The rendered ReplyOptionsModal component
 * @description This component renders a button that opens a popover with options to 
 * select who can reply to a post. The popover has a title with a description, and a list of options 
 * that can be selected. The selected option will be displayed in the button.
 */
function ReplyOptionsModal() {
  const [selectedTitle, setSelectedTitle] = useState<string>("Everyone");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const replyOptions = [
    "Everyone",
    "Account you follow",
    "Verified accounts",
    "Only accounts you mention",
  ];

  const replyOptionsMap = replyOptions.map((item) => {
    return (
      <ReplyOptions
        key={item}
        title={item}
        onSelect={setSelectedTitle}
        isSelected={selectedTitle === item}
      />
    );
  });

  const handleOpenReplyM = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  const handleCloseReplyM = () => setTimeout(() => setAnchorEl(null), 40);

  const openReply = Boolean(anchorEl);

  return (
    <>
      <Button onClick={handleOpenReplyM} sx={styles.buttonPopover} >
        {selectedTitle === "Everyone" && <PublicIcon sx={styles.iconPopOver} />}
        {selectedTitle === "Account you follow" && <GroupAddIcon sx={styles.iconPopOver} />}
        {selectedTitle === "Verified accounts" && <VerifiedIcon sx={styles.iconPopOver} />}
        {selectedTitle === "Only accounts you mention" && <AlternateEmailIcon sx={styles.iconPopOver} />}
        {selectedTitle} can reply
      </Button>

      <Popover
        open={openReply}
        anchorEl={anchorEl}
        onClose={handleCloseReplyM}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          elevation: 3,
          sx: { ...styles.replyPopover },
        }}
      >
        <Box>
          <Box sx={{ color: '#FFF', margin: '0.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '-7rem' }}>
            <h5>Who can reply?</h5>
            <span>
              Choose who can reply to this post. <br /> Anyone mentioned can always
              reply.
            </span>
          </Box>
          {replyOptionsMap}
        </Box>
      </Popover>
    </>
  );
};

/**
 * ReplyOptions component
 * 
 * @param {string} title - The title of the option
 * @param {function} onSelect - Function to call when the option is selected
 * @param {boolean} isSelected - Whether the option is selected
 * @returns {JSX.Element} The rendered ReplyOptions component
 */
function ReplyOptions({ title, onSelect, isSelected }: ReplyOptionsProps) {
  const handleClick = () => onSelect(title);

  return (
    <Box sx={styles.replyOptions} onClick={handleClick}>

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {title === "Everyone" && <PublicIcon sx={styles.replyOptionsIcon} />}
        {title === "Account you follow" && <GroupAddIcon sx={styles.replyOptionsIcon} />}
        {title === "Verified accounts" && <VerifiedIcon sx={styles.replyOptionsIcon} />}
        {title === "Only accounts you mention" && <AlternateEmailIcon sx={styles.replyOptionsIcon} />}
        <strong>{title}</strong>
      </Box>
      {isSelected ? <CheckOutlinedIcon sx={{ color: "#1e9bf0" }} /> : <Box sx={{ width: "10px" }} />}
    </Box>
  );
};

/**
 * Renders a progress circle SVG component to visually indicate the progress percentage.
 *
 * @param {number} percentage - The percentage of progress to display, ranging from 0 to 100.
 * @param {number} remaining - The number of characters remaining, used to dynamically change the stroke color.
 * 
 * The circle's stroke color changes based on the remaining characters:
 * - Red ("#F4212E") if remaining is negative.
 * - Yellow ("#FFD400") if remaining is less than 21.
 * - Blue ("#1E9BF0") otherwise.
 * 
 * If the remaining characters are less than 21, the number is displayed in the center of the circle.
 */
const ProgressCircle = ({ percentage, remaining }: ProgressCricleProps) => {
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const filled = (percentage / 100) * circumference;
  const strokeColor =
    remaining < 0
      ? "#F4212E"
      : remaining < 21
        ? "#FFD400"
        : "#1E9BF0";

  const showText = remaining < +21 && (
    <text
      x="12.5"
      y="13.5"
      textAnchor="middle"
      fontSize="10"
      fill={strokeColor}
    >
      {remaining}
    </text>
  );

  return (
    <svg width="30" height="30" viewBox="0 0 25 25">
      <circle
        cx="12.5"
        cy="12.5"
        r={radius}
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2.4"
      />
      <circle
        cx="12.5"
        cy="12.5"
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeDasharray={`${filled} ${circumference - filled}`}
        strokeDashoffset="0"
        transform="rotate(-90 12.5 12.5)"
      />
      {showText}
    </svg>
  );
};
