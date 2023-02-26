import { ThemeType } from "@/app/lib/theme";
import styled from "styled-components";
import { margin, MarginProps } from "styled-system";

type ButtonProps = Partial<ThemeType> & MarginProps;

export const Button = styled.div<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0.5rem 1rem;
  ${margin}
`;
