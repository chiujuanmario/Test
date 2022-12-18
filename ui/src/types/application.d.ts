interface IClient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface IApplicationState {
  clients: IClient[];
  fetchedClients: IClient[];
}

interface IFormField {
  name: string;
  label: string;
  placeholder: string;
  requiredErrorMessage: string;
  invalidErrorMessage?: string;
}

interface IFormModel {
  formId: string;
  formField: {
    firstName: FormField;
    lastName: FormField;
    email: FormField;
    phoneNumber: FormField;
  };
}
