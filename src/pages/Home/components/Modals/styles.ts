import styled from "@emotion/styled";
import { ButtonProps, TextField, TextFieldProps } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import { PurpleButton } from "../../../../styles/global";

export const InputsBox = styled(Box)<BoxProps>(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: 'translate(-50%, -50%)',
  
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
  backgroundColor: "#202020",
  border: "1px solid #9c27b0",
  maxWidth: "21.875rem",
  padding: 25,
  width: "100%",
  borderRadius: 8
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

export const OpenModal = styled(PurpleButton)<ButtonProps>(() => ({
  maxWidth: "100%",
  height: "3.5rem",
  width: "25%",
}));

export const Footer = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  gap: 10
}));

export const CloseButton = styled(PurpleButton)<ButtonProps>(() => ({
  maxWidth: "50%",
  width: "100%"
}));
