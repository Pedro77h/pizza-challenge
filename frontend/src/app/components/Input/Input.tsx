import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type InputProps = SpaceProps;

export const Input = styled.input<InputProps>`
  width: 10rem;
  height: 1.9rem;
  font-size: .8rem;
  border: 2px solid black;
  margin: 0;
  color: #fff;
  outline: 0;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  ${space}
`;
