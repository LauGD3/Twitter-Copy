import { Box } from "@mui/material";
import TrendingCard from "./TrendingCard";

export default function CardsColum() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'start' }}>
        <TrendingCard />
      </Box>
    </>
  );
}