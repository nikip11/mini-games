import { Word, Category } from '@/interfaces'
import { Box } from '@mui/system'
import { colors } from '@/constants/colors'

const category = colors.red
const cardStyle = (categoryId?: number) => ({
  root: {
    display: 'grid',
    alignItems: 'center',
    height: '100vh',
    card: {
      backgroundColor: 'white',
      border: `${category} solid 10px`,
      borderRadius: '15px',
      padding: '50px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      name: {
        fontFamily: 'Press Start 2P',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: '2rem',
        mb: 1
      },
      img: {
        maxWidth: '100%'
      },
      category: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
        backgroundColor: category,
        width: 'auto',
        borderRadius: '50px',
        padding: '5px 15px'
      },
      image: {
        maxHeight: '200px'
      }
    }
  }
})

type Props = {
  word: Word
  category?: Category
}

export default function CardWord(props: Props) {
  const { word } = props

  return (
    <Box sx={cardStyle().root}>
      <Box sx={cardStyle().root.card}>
        {word.image && <img src={word.image} />}
        <Box sx={cardStyle().root.card.name}>{word.name}</Box>
        <Box sx={cardStyle().root.card.category}>{word.category?.title}</Box>
      </Box>
    </Box>
  )
}
