import { Word, Category } from '@/interfaces'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from '@mui/material'
import { Formik, Form, FormikProps } from 'formik'
import { initialValues } from './types'
import TextField from '@/components/form/TextField'
import * as Yup from 'yup'
import AutoCompleteField from '@/components/form/AutoCompleteField'
import useFetch from '@/hooks/useFetch'
import { useSaveWord } from '@/services/WordService'
import { useGetCategories } from '@/services/CategoryService'
import { useEffect } from 'react'

type Props = {
  open: boolean
  value: Word | null
  close: () => void
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  category: Yup.object().nullable().required('La categoria es requerida')
})

export default function DialogWord(props: Props) {
  const { open, close, value } = props
  const { error, isPending, saveWord } = useSaveWord()
  const { data: categoriesData, getCategories } = useGetCategories()

  useEffect(() => {
    getCategories()
  }, [])

  async function handleSubmit(values: Word) {
    const word = { ...values, category: values?.category }
    await saveWord(word)
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
        initialValues={value ?? initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<Word>) => (
          <Form>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField id="name" label="Nombre" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="image" label="Imagen" />
                </Grid>
                <Grid item xs={12}>
                  <AutoCompleteField
                    id="category"
                    label="Categoría"
                    items={categoriesData}
                    keyName="title"
                    required
                  />
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
