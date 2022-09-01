import styled from "@emotion/styled";
import { TextField, TextFieldProps } from "@mui/material";
import { Box, BoxProps } from "@mui/system";

export const InputsBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
}));

export const Input = styled(TextField)<TextFieldProps>(({ theme }) => ({
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
}));
