import React, { useEffect, useReducer, useState } from 'react';
import { createClient, getClients } from 'services/api';

const initialState: IApplicationState = {
  clients: [],
  fetchedClients: [],
};

export const ACTIONS: Record<string, string> = {
  FETCH_ALL_CLIENTS: 'FETCH_ALL_CLIENTS',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  CREATE_CLIENT: 'CREATE_CLIENT',
};

type Action = {
  type: keyof typeof ACTIONS;
  data: any;
};

const reducer = (state: IApplicationState, action: Action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ALL_CLIENTS:
      return { ...state, clients: action.data, fetchedClients: action.data };

    case ACTIONS.SET_SEARCH_QUERY: {
      const search = action.data.toLowerCase();
      if (search === '') return { ...state, clients: state.fetchedClients };

      const filteredClients = state.fetchedClients.filter(
        ({ firstName, lastName }) =>
          firstName.toLowerCase().includes(search) ||
          lastName.toLowerCase().includes(search)
      );
      return { ...state, clients: filteredClients };
    }

    case ACTIONS.CREATE_CLIENT: {
      const { clients } = state;
      const newClient = action.data;
      return {
        ...state,
        clients: [...clients, newClient],
        fetchedClients: [...clients, newClient],
      };
    }

    default:
      return state;
  }
};

type ClientContextData = {
  clients: IClient[];
  loading: boolean;
  addClient: (client: IClient) => Promise<void>;
  search: (search: string) => void;
};

const ClientContext = React.createContext<ClientContextData | undefined>(
  undefined
);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const clients = await getClients();
      dispatch({ type: ACTIONS.FETCH_ALL_CLIENTS, data: clients });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const addClient = async (values: IClient) => {
    setLoading(true);
    try {
      const client = await createClient(values);
      dispatch({ type: ACTIONS.CREATE_CLIENT, data: client });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const search = async (search: string) => {
    dispatch({ type: ACTIONS.SET_SEARCH_QUERY, data: search });
  };

  return (
    <ClientContext.Provider
      value={{
        loading,
        clients: state.clients,
        addClient,
        search,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export function useClient(): ClientContextData {
  const context = React.useContext(ClientContext);

  if (context === undefined) {
    throw new Error('useClient must be used within a ClientProvider');
  }

  return context;
}
