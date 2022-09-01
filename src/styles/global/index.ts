import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export const PurpleButton = styled(Button)<ButtonProps>(({theme}) => ({
  border: "1px solid #9c27b0",
  "&:hover": {
    border: "1px solid #9c27b0"
  },
  textTransform: "capitalize",
  fontSize: "1rem",
  "&:active": {
    backgroundColor: "#9c27b0"
  },
}));