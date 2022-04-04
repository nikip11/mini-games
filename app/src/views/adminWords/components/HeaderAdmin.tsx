import AddTwoToneIcon from '@mui/icons-material/AddTwoTone'
import { colors } from '@/constants/colors'
import { Grid, Typography, IconButton } from '@mui/material'

const style = {
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
