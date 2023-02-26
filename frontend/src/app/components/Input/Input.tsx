import styled from "styled-components";
import { space, SpaceProps  } from "styled-system";

type InputProps = SpaceProps;

export const Input = styled.input<InputProps>`
  width: 10rem;
  height: 2.2rem;
  font-size: .8rem;
  border: 0;
  margin: 0;
  color: #fff;
  outline: 0;
  background: transparent;
  border-radius: 5px;
  text-align: center;
  ${space}
`;
