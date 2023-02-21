import styled from "styled-components";

import { color, ColorProps, typography, TypographyProps } from "styled-system";

type TextProps = ColorProps & TypographyProps;

export const Text = styled.p<TextProps>`
  font-weight: bold;
  ${color}
  ${typography}
`;
