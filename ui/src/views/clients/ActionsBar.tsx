import { Search as SearchIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  styled,
  Theme,
} from '@mui/material';
import React from 'react';
import CustomDialog from 'components/common/Dialog';
import CreateClient from 'views/clients/CreateClient';
import { useClient } from 'views/clients/context/ClientContext';

const StyledContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    '& > .MuiFormControl-root, & > .MuiButton-root': {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
  },
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.spacing(3),
}));

export default function ActionsBar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <StyledContainer>
        <SearchInput />
        <Button variant="contained" onClick={handleClickOpen} size="large">
          Create new client
        </Button>
      </StyledContainer>
      <CustomDialog
        title="Create new client"
        open={open}
        handleClose={handleClose}
      >
        <CreateClient handleClose={handleClose} />
      </CustomDialog>
    </React.Fragment>
  );
}

const StyledOutlinedInput = styled(OutlinedInput)`
  background-color: #ffffff;
  .MuiOutlinedInput-input {
    padding: 11px 14px;
  }
`;

const SearchInput = () => {
  const { search } = useClient();
  return (
    <FormControl sx={{ width: '34ch' }} variant="outlined">
      <StyledOutlinedInput
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="Search clients" edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        placeholder="Search clients..."
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => search(e.target.value)}
      />
    </FormControl>
  );
};
