import React, { ReactNode } from 'react';
import {Platform, TouchableNativeFeedback, View} from 'react-native';
import styled from 'styled-components/native';
interface CustomButtonProps {
	onPress: () => void;
	children: ReactNode;
}
const CustomButton: React.FC<CustomButtonProps> = ({ onPress, children }) => {
	const isIos = Platform.OS === 'ios';
	const Button = isIos ? StyledButtonIos : StyledButtonAndroid;
	return (
		// @ts-ignore
			<Button onPress={onPress}>
				{children}
			</Button>
	);
};

const StyledButtonIos = styled.TouchableOpacity`

`;

const StyledButtonAndroid = styled(TouchableNativeFeedback)``;


export default CustomButton;
