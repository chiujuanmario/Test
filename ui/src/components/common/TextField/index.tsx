import { TextField } from '@mui/material';
import { FieldProps } from 'formik';

export const CustomTextField = ({
  field,
  form: { touched, errors },
  ...props
}: FieldProps) => (
  <TextField
    {...field}
    {...props}
    error={touched[field.name] && errors[field.name] ? true : false}
    helperText={
      touched[field.name] && errors[field.name] && String(errors[field.name])
    }
  />
);
