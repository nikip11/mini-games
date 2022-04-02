import { FormControl, TextField as MUITextField } from '@mui/material'
import { Field, useField } from 'formik'

type Props = {
  id: string
  label: string
  type?: 'text' | 'number'
  placeholder?: string
  required?: boolean
}

export default function TextField(props: Props) {
  const { id, label, type = 'text', placeholder, required = false } = props
  const [field, meta] = useField(id)
  return (
    <FormControl sx={{ width: '100%' }}>
      <Field id={id} placeholder={placeholder} {...field}>
        {({ field }) => (
          <MUITextField
            id={field.name}
            {...field}
            label={label}
            variant="outlined"
            type={type}
            required={required}
          />
        )}
      </Field>
    </FormControl>
  )
}
