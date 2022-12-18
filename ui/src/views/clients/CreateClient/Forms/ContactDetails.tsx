import { Stack, styled, Theme, Typography } from '@mui/material';
import { CustomTextField } from 'components/common/TextField';
import StyledTextField from 'views/clients/CreateClient/Forms/StyledTextField';

const StyledLabel = styled(Typography)`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
`;

export default function ContactDetails({
  email,
  phoneNumber,
}: Partial<IFormModel['formField']>) {
  return (
    <Stack spacing={1}>
      <Stack spacing={0.5}>
        <StyledLabel>{email.label}</StyledLabel>
        <StyledTextField
          name={email.name}
          placeholder={email.placeholder}
          type="text"
          component={CustomTextField}
          fullWidth
        />
      </Stack>
      <Stack spacing={0.5}>
        <StyledLabel>{phoneNumber.label}</StyledLabel>
        <StyledTextField
          name={phoneNumber.name}
          placeholder={phoneNumber.placeholder}
          type="text"
          component={CustomTextField}
          fullWidth
        />
      </Stack>
    </Stack>
  );
}
