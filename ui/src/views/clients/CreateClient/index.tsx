import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  styled,
  Theme,
} from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import formInitialValues from 'views/clients/CreateClient/FormModel/formInitialValues';
import validationSchema from 'views/clients/CreateClient/FormModel/validationSchema';
import PersonalDetails from 'views/clients/CreateClient/Forms/PersonalDetails';
import ContactDetails from 'views/clients/CreateClient/Forms/ContactDetails';
import clientFormModel from 'views/clients/CreateClient/FormModel/clientFormModel';
import { useStep } from 'views/clients/CreateClient/hooks/useStep';
import { useClient } from 'views/clients/context/ClientContext';

const StyledStepper = styled(Stepper)(({ theme }: { theme: Theme }) => ({
  '& .MuiStep-root:first-child': {
    paddingLeft: 0,
  },
  '& .MuiStepLabel-label': {
    fontWeight: '700',
  },
  '& .MuiStepLabel-iconContainer .Mui-completed': {
    color: theme.palette.secondary.main,
  },
}));

const { formField } = clientFormModel;

const steps = ['Personal details', 'Contact details'];
function renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <PersonalDetails {...formField} />;
    case 1:
      return <ContactDetails {...formField} />;
    default:
      return <div>Not Found</div>;
  }
}

type CreateClientProps = {
  handleClose: () => void;
};

const CreateClient = ({ handleClose }: CreateClientProps) => {
  const [activeStep, { isLastStep, handleNext, handlePrevious }] = useStep(
    steps.length
  );
  const currentValidationSchema = validationSchema[activeStep];
  const { addClient } = useClient();

  const handleSubmit = (values: any, actions: FormikHelpers<any>) => {
    if (isLastStep) {
      handleClose();
      addClient(values);
    } else {
      handleNext();
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledStepper activeStep={activeStep} sx={{ mb: 2 }}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </StyledStepper>
      <Formik
        enableReinitialize={false}
        initialValues={formInitialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form aria-label="form">
            {renderStepContent(activeStep)}
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 6 }}>
              {activeStep !== 0 && (
                <Button
                  size="large"
                  color="inherit"
                  onClick={handlePrevious}
                  startIcon={<KeyboardBackspaceIcon />}
                  sx={{ mr: 1, color: 'primary.main' }}
                >
                  Back
                </Button>
              )}
              <Box sx={{ flex: '1 1 auto' }} />
              <Button type="submit" variant="contained" size="large">
                {activeStep === steps.length - 1 ? 'Create client' : 'Continue'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateClient;
