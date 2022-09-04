import styled from "@emotion/styled";
import { TextFieldProps } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import { Input } from "../../../../styles/global";

export const InteractionContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: 15,
  gap: 15,
  justifyContent: "space-between"
}));

export const SearchTask = styled(Input)<TextFieldProps>(() => ({
  maxWidth: "100%",
  width: "100%"
}));
