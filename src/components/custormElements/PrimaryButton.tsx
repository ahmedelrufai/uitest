import React from 'react';
import styled from 'styled-components/native';
import {normalizeh, normalizew} from "../../utils/helpers.ts";

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onPress }) => (
  <CustomButton onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </CustomButton>
);


const CustomButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primary};
  padding: ${normalizeh(30)}px ${normalizew(36)}px;
  border-radius: ${normalizeh(40)}px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: ${normalizeh(32)}px;
  font-weight: bold;
`;

export default PrimaryButton;
