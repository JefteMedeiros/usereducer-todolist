import styled from "@emotion/styled";
import { ButtonProps } from "@mui/material";
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

export const Footer = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  gap: 10
}));

export const CreateTask = styled(PurpleButton)<ButtonProps>(() => ({
  maxWidth: "50%",
  width: "100%"
}))

export const CloseButton = styled(PurpleButton)<ButtonProps>(() => ({
  maxWidth: "50%",
  width: "100%"
}));
