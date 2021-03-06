import SimpleContainer from '@/components/ui/SimpleContainer'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <SimpleContainer>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Mini Juegos
      </Typography>
      <Link to="/admin/words">admin</Link>
      <Link to="/words">juego</Link>
    </SimpleContainer>
  )
}
