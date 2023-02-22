import styled from "styled-components";

import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  fontSize,
  FontSizeProps,
} from "styled-system";

type TextProps = ColorProps & TypographyProps & FontSizeProps;
export const Text = styled.p<TextProps>`
  font-weight: bold;

  ${color}
  ${typography}
  ${fontSize}
`;
