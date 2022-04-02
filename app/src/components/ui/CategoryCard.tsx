import { Box, Card, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Category } from '@/interfaces'

const style = {
  link: {
    textDecoration: 'none'
  }
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link to={`/words/categories/${category.slug}`}>
            <Box sx={style.link}>{category.title}</Box>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}
