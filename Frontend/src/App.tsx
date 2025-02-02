import './index.css'
import { NavBar } from './components/nav/NavBar'
import TopNavBar from './components/nav/TopNavBar'
import { Box } from '@mui/material'
import CardsColum from './components/cardrs/CardsColum'


function App() {
  return (
    <>
      <Box sx={{ display: 'flex', gap: '2rem', width: '100%', height: '100%', justifyContent: 'center' }}>
        <NavBar />
        <TopNavBar />
        <CardsColum />
      </Box>
    </>
  )
}

export default App
