import { Word } from '@/interfaces'
import { useGetWords } from '@/services/WordService'
import { Button, Skeleton, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import DialogWord from './DialogWord'
import AdminWordCard from './AdminWordCard'
import HeaderAdmin from '@/views/adminWords/components/HeaderAdmin'

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
        <HeaderAdmin title="Palabras" openFormDialog={openFormDialog} />
        <Skeleton height={30} />
        <Skeleton height={20} />
        <Skeleton height={20} />
        <Skeleton height={20} />
        <Skeleton height={20} />
        <Skeleton height={20} />
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
            <AdminWordCard
              item={item}
              onEdit={() => editRow(item)}
              onDelete={() => deleteRow(item)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
