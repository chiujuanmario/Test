import { styled, Theme } from '@mui/material';
import { Field } from 'formik';

const StyledTextField = styled(Field)(({ theme }: { theme: Theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiInputBase-input': {
    textTransform: 'lowercase',
    padding: '12px 14px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 6,
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
  },
}));

export default StyledTextField;
