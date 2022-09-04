import styled from "@emotion/styled";
import { Button, ButtonProps, TextField, TextFieldProps } from "@mui/material";

export const PurpleButton = styled(Button)<ButtonProps>(() => ({
  border: "1px solid #9c27b0",
  color: "white",
  transition: "all 200ms",
  
  textTransform: "capitalize",
  fontSize: "1rem",

  "&:hover": {
    border: "1px solid #9c27b0",
    transform: "scale(0.95)",
  },

  "&:active": {
    backgroundColor: "#9c27b0",
  },
}));

export const Input = styled(TextField)<TextFieldProps>(() => ({
  ".MuiFormLabel-root": {
    color: "white"
  },
  ".MuiInputBase-root": {
    color: "white"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9c27b0",
    },
    "&:hover fieldset": {
      borderColor: "#9c27b0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9c27b0",
    },
  },
  width: "100%",
}));
