import AddTwoToneIcon from '@mui/icons-material/AddTwoTone'
import { colors } from '@/constants/colors'
import { Grid, Typography, IconButton, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const style = {
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    a: {
      color: colors.blue,
      textDecoration: 'none'
    }
  },
  addBtn: {
    backgroundColor: colors.blue,
    color: '#ffffff',
    '&:hover': {
      color: '#333333'
    }
  }
}

export default function HeaderAdmin({
  title,
  openFormDialog
}: {
  title: string
  openFormDialog: () => void
}) {
  return (
    <Grid container spacing={2} my={3}>
      <Grid item xs={6}>
        <Box sx={style.menu}>
          <Link to="/admin/words">
            <Typography sx={{ minWidth: 100 }}>Palabras</Typography>
          </Link>
          <Link to="/admin/category">Categorías</Link>
          <Link to="/words">ir al juego</Link>
        </Box>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item xs={2} pr={1} sx={{ textAlign: 'right' }}>
        <IconButton onClick={openFormDialog} sx={style.addBtn}>
          <AddTwoToneIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
