// Material UI Components
import { Box } from "@mui/material";
// Components
import CardColum from "../../components/cardrs/Cards";
import NavBar from "../../components/nav/NavBar";
import TopNavBar from "../../components/nav/TopNavBar";

export default function HomePage() {
  const cardsTypes = ['trendingCard', 'followCard'];

  const styles = {
    display: 'flex',
    gap: '2rem',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    '@media (max-width: 1200px)': {
      gap: '1rem',
    }
  };

  return (
    <Box sx={styles}>
      <NavBar />
      <TopNavBar />
      <CardColum cardType={cardsTypes} />
    </Box>
  )
}