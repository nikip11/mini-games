import SimpleContainer from '@/components/ui/SimpleContainer'
import { Category, Word } from '@/interfaces'
import { useGetCategories } from '@/services/CategoryService'
import {
  TableContainer,
  Skeleton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Grid,
  Avatar
} from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import DialogCategory from './DialogCategory'

export default function ListCategory() {
  const { data, error, isPending, getCategories } = useGetCategories()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<Category | null>(null)

  useEffect(() => {
    setTimeout(() => {
      getCategories()
    }, 5000)
  }, [])

  if (!data || isPending) {
    return (
      <>
        <Skeleton height={50} />
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

  function editRow(category: Category) {
    setFormValues(category)
    setOpenDialog(true)
  }

  function openFormDialog() {
    setFormValues(null)
    setOpenDialog(true)
  }

  function closeFormDialog() {
    setOpenDialog(false)
    getCategories()
  }

  return (
    <>
      <DialogCategory open={openDialog} close={closeFormDialog} value={formValues} />
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Button onClick={openFormDialog}>Nueva categoría</Button>
        </Grid>
      </Grid>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item: Category) => (
              <TableRow key={item.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {item.title}
                  <Avatar alt={item.title} src={item.image} />
                </TableCell>
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
