import './index.css'
import { NavBar } from './components/nav/NavBar'
import TopNavBar from './components/nav/TopNavBar'
import { Box } from '@mui/material'
import CardColum from './components/cardrs/Cards'


function App() {
  const cardsTypes = ['trendingCard', 'followCard'];
  return (
    <>
      <Box sx={{ display: 'flex', gap: '2rem', width: '100%', height: '100%', justifyContent: 'center' }}>
        <NavBar />
        <TopNavBar />
        <CardColum cardType={cardsTypes}/>
      </Box>
    </>
  )
}

export default App
