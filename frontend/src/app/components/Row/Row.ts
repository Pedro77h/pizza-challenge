import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  background,
  BackgroundProps,
  borderRadius,
  BorderRadiusProps,
} from "styled-system";

type RowProps = SpaceProps &
  FlexboxProps &
  LayoutProps &
  BorderProps &
  BackgroundProps &
  BorderRadiusProps;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  ${space}
  ${flexbox}
  ${layout}
  ${border}
  ${background}
  ${borderRadius}
`;
