import { Box, colors, Typography } from '@mui/material'
const style = {
  backgrounColor: colors.blue[900],
  with: '100%',
  color: colors.lime[100],
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '9'
}
export default function Loading() {
  return (
    <Box sx={style}>
      <Typography variant="h1">Loading...</Typography>
    </Box>
  )
}
