import { memo } from 'react';
import { Paper, Typography } from '@mui/material';
import Page from 'components/common/Page';
import ActionsBar from 'views/clients/ActionsBar';
import ClientTable from 'views/clients/ClientTable';
import { ClientProvider } from 'views/clients/context/ClientContext';

function Clients() {
  return (
    <Page>
      <Typography variant="h4" sx={{ textAlign: 'start' }}>
        Clients
      </Typography>
      <ClientProvider>
        <ActionsBar />
        <Paper sx={{ margin: 'auto', marginTop: 3 }}>
          <ClientTable />
        </Paper>
      </ClientProvider>
    </Page>
  );
}

export default memo(Clients);
