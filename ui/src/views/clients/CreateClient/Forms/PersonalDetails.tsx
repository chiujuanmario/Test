import { Stack, styled, Theme, Typography } from '@mui/material';
import { CustomTextField } from 'components/common/TextField';
import StyledTextField from 'views/clients/CreateClient/Forms/StyledTextField';

const StyledLabel = styled(Typography)`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
`;

export default function PersonalDetails({
  firstName,
  lastName,
}: Partial<IFormModel['formField']>) {
  return (
    <Stack spacing={1}>
      <Stack spacing={0.5}>
        <StyledLabel>{firstName.label}</StyledLabel>
        <StyledTextField
          name={firstName.name}
          placeholder={firstName.placeholder}
          type="text"
          component={CustomTextField}
          fullWidth
        />
      </Stack>
      <Stack spacing={0.5}>
        <StyledLabel>{lastName.label}</StyledLabel>
        <StyledTextField
          name={lastName.name}
          placeholder={lastName.placeholder}
          type="text"
          component={CustomTextField}
          fullWidth
        />
      </Stack>
    </Stack>
  );
}
