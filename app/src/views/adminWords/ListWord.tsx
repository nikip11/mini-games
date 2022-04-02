import { Word } from '@/interfaces'
import { useGetWords } from '@/services/WordService'
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Skeleton,
  Grid,
  Avatar
} from '@mui/material'
import { useEffect, useState } from 'react'
import DialogWord from './DialogWord'

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

  return (
    <>
      <DialogWord open={openDialog} close={closeFormDialog} value={formValues} />

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Button onClick={openFormDialog}>Nueva palabra</Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item: Word) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar alt={item.name} src={item.image} variant="square" />
                    {item.name}
                  </TableCell>
                  <TableCell>{item.category?.title}</TableCell>
                  <TableCell>
                    <Button onClick={() => editRow(item)}>Editar</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
