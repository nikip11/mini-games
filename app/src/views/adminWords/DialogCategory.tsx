import { Category } from '@/interfaces'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from '@mui/material'
import { Formik, Form, FormikProps } from 'formik'
import { initialCategoryValues } from './types'
import TextField from '@/components/form/TextField'
import * as Yup from 'yup'
import { useSaveCategory } from '@/services/CategoryService'

type Props = {
  open: boolean
  value: Category | null
  close: () => void
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('El nombre es requerido')
})

export default function DialogWord(props: Props) {
  const { open, close, value } = props
  const { error, isPending, saveCategory } = useSaveCategory()

  async function handleSubmit(values: Category) {
    await saveCategory(values)
    close()
  }

  if (error) {
    console.error(error)
  }

  if (isPending) {
    return <div>Cargando...</div>
  }

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>{value ? 'Editar' : 'Nueva Palabra'}</DialogTitle>
      <Formik
        initialValues={value ?? initialCategoryValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<Category>) => (
          <Form>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField id="title" label="Nombre" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="image" label="Imagen" />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={close}>Cancel</Button>
              <Button type="submit" disabled={!props.isValid}>
                Guardar
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  )
}
