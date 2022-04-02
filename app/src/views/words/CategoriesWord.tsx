import CategoryCard from '@/components/ui/CategoryCard'
import { Category } from '@/interfaces'
import { Container, Grid, Typography, Paper, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'
import { useGetCategories } from '@/services/CategoryService'
import { useEffect } from 'react'
import SimpleContainer from '@/components/ui/SimpleContainer'

export default function CategoriesWord() {
  const { data, getCategories, isPending } = useGetCategories()

  useEffect(() => {
    getCategories()
  }, [])

  if (!data || isPending) {
    return (
      <SimpleContainer>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Skeleton height={40} />
          </Grid>
          <Grid item xs={6}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Grid>
          <Grid item xs={6}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Grid>
        </Grid>
      </SimpleContainer>
    )
  }

  return (
    <>
      <SimpleContainer>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Categorías
        </Typography>
        <Grid container spacing={2}>
          {data?.map((category: Category) => (
            <Grid item xs={6} key={category.id}>
              <Link to={`/words/categories/${category.slug}`}>{category.title}</Link>
              {/* <CategoryCard category={category} /> */}
            </Grid>
          ))}
          <Grid item xs={6}>
            <Link to="/words/categories/aleatorio">Aleatorio</Link>
          </Grid>
        </Grid>
      </SimpleContainer>
    </>
  )
}
