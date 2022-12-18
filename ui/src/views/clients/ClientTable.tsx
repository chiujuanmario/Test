import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClientRow from 'views/clients/ClientRow';
import { useClient } from 'views/clients/context/ClientContext';
import { styled } from '@mui/material';

const StyledTable = styled(Table)(() => ({
  '& .MuiTableCell-head': {
    fontWeight: '600',
  },
  '& .MuiTableCell-root:not(.MuiTableCell-head)': {
    color: '#534C75',
  },
}));

export default function BasicTable() {
  const { clients } = useClient();

  return (
    <TableContainer component={Paper} elevation={0} sx={{ maxWidth: '100%' }}>
      <StyledTable sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
          {!clients ||
            (!clients.length && (
              <TableRow sx={{ padding: 3 }}>
                <TableCell component="th" scope="row">
                  No clients
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
