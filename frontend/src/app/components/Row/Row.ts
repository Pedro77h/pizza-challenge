import styled from "styled-components";
import { flex, FlexProps } from "styled-system";

type RowProps = FlexProps;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
   ${flex} 
`;
