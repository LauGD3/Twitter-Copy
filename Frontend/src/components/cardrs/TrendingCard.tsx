import { Box } from "@mui/material";
import { trendingCardStyles } from "./styles";

export default function TrendingCard() {
  return (
    <Box sx={{trendingCardStyles}}>
      <span style={{ fontSize: '1.5rem', margin: '10px' }}><strong>What's happening</strong></span>
      <Box sx={{width: '100%',}}>

      </Box>
      <span>Show more</span>
    </Box>
  );
};