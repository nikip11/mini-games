import ListCategory from '../categories/ListCategory'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'

export default function AdminWord() {
  return (
    <>
      <Container>
        <Link to="/words">Ir al juego</Link>
        <ListCategory />
      </Container>
    </>
  )
}
