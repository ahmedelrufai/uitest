import React from 'react';
import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';
import {normalizeh, normalizew} from "../../utils/helpers.ts";
import CustomText from "./Text.tsx";
import {darkTheme, lightTheme} from "../../utils/theme.ts";
import useStore from "../../store/store.ts";
interface InputFieldProps extends TextInputProps {
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
	onBlur: (e:any) => void;
	error?: string | boolean;
}

const InputField: React.FC<InputFieldProps> = ({
	                                               placeholder,
	                                               value,
	                                               onChangeText,
	                                               onBlur,
	                                               keyboardType,
	                                               error
                                               }) => {
	const { activeTheme, loadTheme, toggleTheme } = useStore();

	const theme = activeTheme === 'light' ? lightTheme : darkTheme;

	return (
		<Container>
			<CustomText color={theme.lineColor}>{placeholder}</CustomText>
			<StyledInput

				value={value}
				onChangeText={onChangeText}
				onBlur={onBlur}
				keyboardType={keyboardType}
				error={!!error}
			/>
		</Container>
	)
};
const Container = styled.View`
 gap: ${normalizeh(16)}px;
	min-width: 100%;
`
const StyledInput = styled.TextInput<{ error: boolean }>`
  min-width: 100%;
  padding: 10px;
  margin-bottom: 10px;
	height: ${normalizeh(88)}px;
  border: 1px solid ${(props) => (props.error ? 'red' : props.theme.lineColor)};
  border-radius: ${normalizeh(22)}px;
	border-left-width: ${normalizew(8)}px;
	color:${({theme})=>theme.text};
  border-left-color: ${({theme})=>theme.lineColor};
`;

export default InputField;
