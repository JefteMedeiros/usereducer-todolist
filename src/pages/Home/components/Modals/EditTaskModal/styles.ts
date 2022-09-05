import styled from "@emotion/styled";
import { ButtonProps } from "@mui/material";
import { PurpleButton } from "../../../../../styles/global";

export const EditTask = styled(PurpleButton)<ButtonProps>(() => ({
  maxWidth: "50%",
  width: "100%"
}))

export const OpenEditTask = styled(PurpleButton)<ButtonProps>(() => ({
  maxWidth: "100%",
  width: "100%"
})); 