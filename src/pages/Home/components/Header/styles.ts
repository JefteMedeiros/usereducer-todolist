import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/system";

export const HeaderContainer = styled(Box)<BoxProps>(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#151515",
  padding: "1.875rem 0",
}));