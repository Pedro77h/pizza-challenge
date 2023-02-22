import { ThemeType } from "@/app/lib/theme";
import styled from "styled-components";

type ButtonProps = ThemeType

export const Button = styled.div<ButtonProps>`
  background-color: ${({theme}) => theme.colors.secondary} ;
`