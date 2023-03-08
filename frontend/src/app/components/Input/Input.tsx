import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type InputProps = SpaceProps;

export const Input = styled.input<InputProps>`
  font-size: 0.8rem;
  border: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  outline: 0;
  background: transparent;
  border-radius: 5px;
  ${space}
`;
