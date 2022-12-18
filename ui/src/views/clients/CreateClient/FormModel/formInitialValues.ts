import ClientFormModel from 'views/clients/CreateClient/FormModel/clientFormModel';

const {
  formField: { firstName, lastName, email, phoneNumber },
} = ClientFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [phoneNumber.name]: '',
};
