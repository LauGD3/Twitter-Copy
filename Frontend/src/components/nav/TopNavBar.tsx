import { SyntheticEvent, useState } from "react";
// Styles
import { tabs, topNavBar } from "./style";
// Material UI Components
import { Box, Tab, Tabs } from "@mui/material";
import PostArea from "../tweets/postAreaComponent";

/**
 * TopNavBar component
 * 
 * @returns {JSX.Element} The rendered NavBar component
 */
export default function TopNavBar() {
  const [selectedTitle, setSelectedTitle] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => setSelectedTitle(newValue);

  return (
    <>
      <Box sx={topNavBar}>
        <Tabs
          value={selectedTitle}
          textColor="inherit"
          onChange={handleChange}
          variant="standard"
        >
          <Tab label="For you" sx={{ ...tabs, fontWeight: selectedTitle === 0 ? '500' : 'normal' }} />
          <Tab label="Following" sx={{ ...tabs, fontWeight: selectedTitle === 0 ? 'normal' : '500' }} />
        </Tabs>
        <PostArea topSide={false} />
      </Box>
    </>
  );
};