import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ marginY: '75px' }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h5">Page not found</Typography>
      <Link to="/">Go to Home</Link>
    </Container>
  )
}
