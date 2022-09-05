import styled from "@emotion/styled";
import { ButtonProps } from "@mui/material";
import { PurpleButton } from "../../../../../styles/global";

export const CreateTask = styled(PurpleButton)<ButtonProps>(() => ({
  maxWidth: "50%",
  width: "100%"
}))