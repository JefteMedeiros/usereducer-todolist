import { styled } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';

export const HeaderContainer = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#151515",
  padding: "1.875rem 0",
}));

export const HeaderTitle = styled("h1")(({ theme }) => ({
  fontFamily: "Montserrat",
  color: "#9c27b0",
  fontWeight: 300,
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.75rem",
  },
}));