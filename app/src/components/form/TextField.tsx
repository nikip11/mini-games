import { Box, FormControl, TextField as MUITextField } from '@mui/material'
import { useField } from 'formik'

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
      <MUITextField
        id={id}
        label={label}
        variant="outlined"
        type={type}
        required={required}
        onChange={field.onChange}
        value={field.value}
        onBlur={field.onBlur}
        placeholder={placeholder}
      />
      <Box component="span">{meta.error}</Box>
    </FormControl>
  )
}
