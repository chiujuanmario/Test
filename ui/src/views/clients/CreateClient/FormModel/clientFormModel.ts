export default {
  formId: 'clientForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name',
      placeholder: 'First name',
      requiredErrorMessage: 'First name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last name',
      placeholder: 'Last name',
      requiredErrorMessage: 'Last name is required',
    },
    email: {
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      requiredErrorMessage: 'Email is required',
      invalidErrorMessage: 'Invalid email',
    },
    phoneNumber: {
      name: 'phoneNumber',
      label: 'Phone number',
      placeholder: 'Phone number',
      requiredErrorMessage: 'Phone is required',
    },
  },
} as IFormModel;
