import { FormControl, Autocomplete, TextField, Typography, Box } from '@mui/material'
import { Field, FieldProps, useFormikContext, useField } from 'formik'
import { SyntheticEvent } from 'react'

type Props<T> = {
  id: string
  label: string
  items: T[] | null
  keyName: keyof T
  placeholder?: string
  required?: boolean
}

export default function AutoCompleteField<T>(props: Props<T>) {
  const {
    id,
    label = 'field',
    items = [],
    placeholder,
    keyName = 'label',
    required = false
  } = props
  const [field, meta] = useField(id)
  const { setFieldValue } = useFormikContext()
  return (
    <FormControl sx={{ width: '100%' }}>
      <Autocomplete
        id={id}
        {...field}
        options={items ?? []}
        getOptionLabel={(option: T) => String(option[keyName as keyof T])}
        isOptionEqualToValue={(option: T, value: T) => {
          return typeof option === 'string' || typeof value === 'number'
            ? option === value
            : option[keyName as keyof T] === value[keyName as keyof T]
        }}
        onChange={(_event: SyntheticEvent, newValue: T | T[] | null) => {
          setFieldValue(id, newValue)
        }}
        onOpen={field.onBlur}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            value={field.value}
            onBlur={field.onBlur}
            required={required}
          />
        )}
        placeholder={placeholder}
      />
      <Box component="span">{meta.error}</Box>
    </FormControl>
  )
}
