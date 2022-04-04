import { Word } from '@/interfaces'
import { useGetWords } from '@/services/WordService'
import { Button, Skeleton, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import DialogWord from './DialogWord'
import HeaderAdmin from '@/views/adminWords/components/HeaderAdmin'
import CardAdmin from '../components/CardAdmin'

export default function ListWord() {
  const { data = [], error, isPending, getWords } = useGetWords()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<Word | null>(null)

  useEffect(() => {
    getWords()
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

  function editRow(word: Word) {
    setFormValues(word)
    setOpenDialog(true)
  }

  function openFormDialog() {
    setFormValues(null)
    setOpenDialog(true)
  }
  function closeFormDialog() {
    setOpenDialog(false)
    getWords()
  }

  function deleteRow(word: Word) {
    console.log('Delete', word)
  }

  return (
    <>
      <DialogWord open={openDialog} close={closeFormDialog} value={formValues} />
      <HeaderAdmin title="Palabras" openFormDialog={openFormDialog} />
      <Grid container spacing={3}>
        {data.map((item: Word) => (
          <Grid item xs={4} key={item.name}>
            <CardAdmin
              item={{
                title: item.name,
                image: item.image,
                category: item.category
              }}
              onEdit={() => editRow(item)}
              onDelete={() => deleteRow(item)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
