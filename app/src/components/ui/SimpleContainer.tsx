import { Container, Paper } from '@mui/material'
import { ReactNode } from 'react'

export default function SimpleContainer({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ backgroundColor: 'white', padding: '30px' }}>
        {children}
      </Paper>
    </Container>
  )
}
