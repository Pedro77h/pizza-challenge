import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
} from "styled-system";

type RowProps = SpaceProps & FlexboxProps & LayoutProps;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  ${space}
  ${flexbox}
  ${layout}
`;
