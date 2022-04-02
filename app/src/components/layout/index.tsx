import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import bg from '@/assets/images/bg.png'

const style = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'auto',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
  backgroundColor: 'darkgrey',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
export default function Layout() {
  return (
    <Box sx={style}>
      <Container maxWidth="xl" sx={{ paddingY: '20px' }}>
        <Outlet />
      </Container>
    </Box>
  )
}
