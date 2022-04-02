import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { colors } from '@/constants/colors'

const style = {
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none'
  },
  button: {
    fontFamily: 'Press Start 2P',
    backgroundColor: colors.blue,
    borderRadius: '5px',
    padding: '15px 30px',
    color: colors.white,
    textDecoration: 'none',
    fontSize: '3rem',
    '&a:hover': {
      backgroundColor: 'yellow',
      color: 'red'
    }
  }
}

export default function WordHomePage() {
  return (
    <>
      <Box sx={style.root}>
        <Link to="/words/categories" style={style.button}>
          COMENZAR
        </Link>
      </Box>
    </>
  )
}
