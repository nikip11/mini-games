import { Category } from '@/interfaces'
import { useGetCategories } from '@/services/CategoryService'
import { Skeleton, Grid, Container, Typography, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import DialogCategory from './DialogCategory'
import HeaderAdmin from '@/views/adminWords/components/HeaderAdmin'
import CardAdmin from '../components/CardAdmin'

export default function ListCategory() {
  const { data, error, isPending, getCategories } = useGetCategories()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<Category | null>(null)

  useEffect(() => {
    getCategories()
  }, [])

  if (!data || isPending) {
    return (
      <>
        <HeaderAdmin title="Categorías" openFormDialog={openFormDialog} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton height={65} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton height={65} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton height={65} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton height={65} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton height={65} />
          </Grid>
        </Grid>
      </>
    )
  }

  if (error) {
    return <div>Error</div>
  }

  function editRow(category: Category) {
    setFormValues(category)
    setOpenDialog(true)
  }

  function deleteRow(category: Category) {
    console.log('Delete', category)
  }

  function closeFormDialog() {
    setOpenDialog(false)
    getCategories()
  }

  function openFormDialog() {
    setFormValues(null)
    setOpenDialog(true)
  }

  return (
    <>
      <DialogCategory open={openDialog} close={closeFormDialog} value={formValues} />
      <HeaderAdmin title="Categorías" openFormDialog={openFormDialog} />
      <Grid container spacing={2}>
        {data?.map((item: Category) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <CardAdmin
              item={{
                title: item.title,
                image: item.image
              }}
              onEdit={editRow}
              onDelete={deleteRow}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
