import styled from "@emotion/styled";
import { ButtonProps, Paper, PaperProps } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import { PurpleButton } from "../../../../styles/global";

export const TaskBox = styled(Paper)<PaperProps>(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  listStyleType: "none",
  
  margin: "0.9375rem 0",
  background: "transparent",
  padding: "0.9375rem 1.25rem",
  color: "white",
  border: "1px solid #9c27b0",
  alignSelf: "flex-start",

  "@media screen and (max-width: 600px)": {
    alignItems: "flex-start",
    gap: 15,
    flexDirection: "column"
  }
}));

export const AlterTask = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  gap: 10
}))

export const EditTask = styled(PurpleButton)<ButtonProps>(() => ({
  height: "2.625rem",
  width: "100%"
}))

export const DeleteTask = styled(PurpleButton)<ButtonProps>(() => ({
  height: "2.625rem",
}));