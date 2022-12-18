import * as Yup from 'yup';
import ClientFormModel from 'views/clients/CreateClient/FormModel/clientFormModel';

const {
  formField: { firstName, lastName, email, phoneNumber },
} = ClientFormModel;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(firstName.requiredErrorMessage),
    [lastName.name]: Yup.string().required(lastName.requiredErrorMessage),
  }),
  Yup.object().shape({
    [email.name]: Yup.string()
      .email(email.invalidErrorMessage)
      .required(email.requiredErrorMessage),
    [phoneNumber.name]: Yup.string().required(phoneNumber.requiredErrorMessage),
  }),
];
