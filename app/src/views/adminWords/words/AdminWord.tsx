import { Container } from '@mui/material'
import ListWord from '../words/ListWord'
import { Link } from 'react-router-dom'

export default function AdminWord() {
  return (
    <>
      <Container>
        <Link to="/words">Ir al juego</Link>
        <ListWord />
      </Container>
    </>
  )
}
