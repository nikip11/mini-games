import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

const style = {
  // minHeight: '100vh',
  // display: 'flex',
  // alignItems: 'flex-start',
  // justifyContent: 'center'
}
export default function AdminLayout() {
  return (
    <Box sx={style}>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  )
}
