import { FormControl, Autocomplete, TextField } from '@mui/material'
import { Field, useField, useFormikContext } from 'formik'

type Props<T> = {
  id: string
  label: string
  items: T[] | null
  keyName: keyof T
  placeholder?: string
  required?: boolean
}

export default function AutoCompleteField<T>(props: Props<T>) {
  const { id, label, items, placeholder, keyName = 'label', required = false } = props
  const [field, meta] = useField(id)
  const { setFieldValue } = useFormikContext()
  return (
    <FormControl sx={{ width: '100%' }}>
      <Field id={id} placeholder={placeholder} {...field}>
        {({ field }) => (
          <Autocomplete
            id={field.id}
            {...field}
            label={label}
            options={items}
            getOptionLabel={(option: T) => option[keyName as keyof T]}
            isOptionEqualToValue={(option: T, value: T) => {
              return typeof option === 'string' || typeof value === 'number'
                ? option === value
                : option[keyName as keyof T] === value[keyName as keyof T]
            }}
            onChange={(_event, newValue: T) => {
              setFieldValue(id, newValue)
            }}
            required={required}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant="outlined"
                {...field}
                required={required}
              />
            )}
          />
        )}
      </Field>
    </FormControl>
  )
}
