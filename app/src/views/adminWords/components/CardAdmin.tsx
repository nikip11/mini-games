import { Avatar, IconButton, Typography } from '@mui/material'
import { Category } from '@/interfaces'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import { Box } from '@mui/system'

const style = {
  backgroundColor: '#f5f5f5',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '65px',
  content: {
    borderRadius: '5px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    div: {
      fontSize: '1.3em',
      color: '#333',
      textTransform: 'capitalize'
    }
  },
  actions: {
    marginRight: '10px',
    width: '100px',
    maxWidth: '100px',
    minWidth: '100px',
    edit: {
      backgroundColor: '#ffffff'
    },
    delete: {
      marginLeft: '10px',
      backgroundColor: '#ff0000',
      color: '#ffffff',
      '&:hover': {
        color: '#333333'
      }
    }
  }
}

type CardItem = {
  title: string
  image?: string
  category?: Category | null
}

type Props = {
  item: CardItem
  onEdit: (item: Category) => void
  onDelete: (item: Category) => void
}

export default function CardAdmin(props: Props) {
  const { item, onEdit, onDelete } = props
  return (
    <Box sx={style}>
      <Box sx={style.content}>
        {item.image && <Avatar alt={item.title} src={item.image} />}
        <Typography component="div">{item.title}</Typography>
      </Box>
      <Box sx={style.actions}>
        <IconButton sx={style.actions.edit} onClick={() => onEdit(item)}>
          <EditTwoToneIcon />
        </IconButton>
        <IconButton sx={style.actions.delete} onClick={() => onDelete(item)}>
          <DeleteTwoToneIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
