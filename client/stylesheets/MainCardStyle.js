import { blue } from '@mui/material/colors';

const boxBorder = blue[50];
export const cardStyle = {
  minWidth: 455,
  // flexBasis: "calc(50% - 30px)",
  margin: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Pixelify Sans',
  padding: 3,
  boxShadow: 3,
  borderRadius: 2,
  backgroundColor: 'rgba(255, 255, 255, 0.7)', //transparent
  border: 2,
  borderColor: boxBorder,
};

export const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  justifyContent: 'center',
};
