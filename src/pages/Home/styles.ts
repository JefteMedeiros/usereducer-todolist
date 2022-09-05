import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/system";

export const TaskContainer = styled(Box)<BoxProps>(() => ({
  margin: "auto",
  padding: "0 1.25rem",
  maxWidth: "70rem",
  "ul": {
    listStyleType: "none"
  }
}));

export const HomeContainer = styled(Box)<BoxProps>(() => ({
  listStyleType: "none"
}));
