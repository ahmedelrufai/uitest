import React from 'react';
import styled from 'styled-components/native';
import {normalizeh} from "../../utils/helpers.ts";

interface CustomTextProps {
  size?: number;
  color?: string;
  weight?: number; // Ensure this is a valid CSS font-weight
  align?:string;
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ size, color, weight, children,align }) => (
  <StyledText size={size} color={color} weight={weight} align={align}>
    {children}
  </StyledText>
);
const StyledText = styled.Text<CustomTextProps>`
  color: ${({ theme, color }) => color || theme.text};
  font-size: ${({ size }) => (size ? `${normalizeh(size)}px` : `${normalizeh(32)}px`)}; 
  font-weight: ${({ weight }) => (weight ? weight : 400)}; 
  text-align: ${({align})=>align??"left"};
`;
export default CustomText;
