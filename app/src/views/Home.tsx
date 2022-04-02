import SimpleContainer from '@/components/ui/SimpleContainer'
import useFilter from '@/hooks/useFilter'
import { words } from '@/mocks'
import { Typography } from '@mui/material'

export default function Home() {
  const data = useFilter(
    words,
    [
      {
        key: 'name',
        value: 'perro'
      },
      {
        key: 'name',
        value: 'gato'
      }
    ],
    'OR'
  )

  console.log({ data })

  return (
    <SimpleContainer>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Mini Juegos
      </Typography>
    </SimpleContainer>
  )
}
