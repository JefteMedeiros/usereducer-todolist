import styled from "@emotion/styled";
import { Paper, PaperProps } from "@mui/material";

export const TaskBox = styled(Paper)<PaperProps>(({theme}) => ({
  margin: "20px 0",
  background: "transparent",
  padding: "15px 20px",
  margin: 20,
  color: "white",
  border: "1px solid #9c27b0",
  alignSelf: "flex-start",

  "button": {
    marginTop: 20,
    color: "white"
  }
}))