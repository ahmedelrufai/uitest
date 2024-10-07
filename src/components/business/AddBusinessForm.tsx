import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, Image, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import InputField from "../custormElements/InputField.tsx";
import CustomButton from "../custormElements/CustomButton.tsx";
import CustomText from "../custormElements/Text.tsx";
import {normalizeh, normalizew} from "../../utils/helpers.ts";
const ProfilePlaceHolder = require("../../assets/images/ProfilePlaceholder.png")

// Define form values type
interface FormValues {
	businessName: string;
	businessEmail: string;
	contact: string;
}

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
	businessName: Yup.string()
		.required('Business name is required')
		.min(3, 'Business name must be at least 3 characters long'),
	businessEmail: Yup.string()
		.email('Invalid email address')
		.required('Business email is required'),
	contact: Yup.string()
		.matches(/^[0-9]+$/, 'Contact must be a number')
		.min(10, 'Contact must be at least 10 digits')
		.required('Contact is required'),
});

const AddBusinessForm: React.FC = () => {
	const [imageUri, setImageUri] = useState<string | null>(null);

	const pickImage = () => {
		launchImageLibrary(
			{
				mediaType: 'photo',
				maxWidth: 1000,
				maxHeight: 1000,
				quality: 1,
			},
			(response) => {
				if (response.didCancel) {
					console.log('User cancelled image picker');
				} else if (response.errorCode) {
					console.log('ImagePicker Error: ', response.errorMessage);
				} else if (response.assets && response.assets.length > 0) {
					console.log('Image URI:', response.assets[0].uri); // Log the image URI
					setImageUri(response.assets[0].uri as string);
				}
			}
		);
	};

	const handleSubmit = (values: FormValues) => {
		console.log({ ...values, imageUri });
		Alert.alert('Business Submitted', JSON.stringify({ ...values, imageUri }));
	};

	return (
		<Formik
			initialValues={{ businessName: '', businessEmail: '', contact: '' }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({
				  handleChange,
				  handleBlur,
				  handleSubmit,
				  values,
				  errors,
				  touched
			  }: FormikProps<FormValues>) => (
				<Container>
					<InputsWrapper>
						<CustomButton onPress={pickImage}>

							<Icon resizeMode={"cover"} source={imageUri ? { uri: imageUri } : ProfilePlaceHolder} />

						</CustomButton>

					<InputField
						placeholder="Business Name"
						value={values.businessName}
						onChangeText={handleChange('businessName')}
						onBlur={handleBlur('businessName')}
						error={touched.businessName && errors.businessName}
					/>
					{touched.businessName && errors.businessName && (
						<ErrorText>{errors.businessName}</ErrorText>
					)}

					<InputField
						placeholder="Business Email"
						value={values.businessEmail}
						onChangeText={handleChange('businessEmail')}
						onBlur={handleBlur('businessEmail')}
						keyboardType="email-address"
						error={touched.businessEmail && errors.businessEmail}
					/>
					{touched.businessEmail && errors.businessEmail && (
						<ErrorText>{errors.businessEmail}</ErrorText>
					)}

					<InputField
						placeholder="Contact"
						value={values.contact}
						onChangeText={handleChange('contact')}
						onBlur={handleBlur('contact')}
						keyboardType="phone-pad"
						error={touched.contact && errors.contact}
					/>
					{touched.contact && errors.contact && (
						<ErrorText>{errors.contact}</ErrorText>
					)}
					</InputsWrapper>


					<CustomButton onPress={handleSubmit}>
						<SubmitButtonWrapper>
							<CustomText size={43} weight={600}>Add</CustomText>

						</SubmitButtonWrapper>
					</CustomButton>
				</Container>
			)}
		</Formik>
	);
};
const Icon = styled.Image`
  width: ${normalizew(180)}px;
  max-width: ${normalizew(180)}px;
  max-height: ${normalizew(180)}px;

`
const InputsWrapper = styled.View`
background-color: ${({theme})=>theme.topBackground};
	padding: ${normalizeh(64)}px ${normalizew(42)}px;
	border-radius: ${normalizeh(42)}px;
	gap: ${normalizeh(32)}px;

	align-items: center;
`
const Container = styled.View`
  gap: ${normalizeh(24)}px;
`;


const BusinessImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;

const SubmitButtonWrapper = styled.TouchableOpacity`
  background-color: ${({theme})=>theme.topBackground};
  padding: 10px;
	height: ${normalizeh(98)}px;
  border-radius:${normalizeh(32)}px;
  align-items: center;
	justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const ErrorText = styled.Text`
  color: ${({theme})=>theme.actionColor};
  font-size: 12px;
  margin-bottom: 10px;
`;

export default AddBusinessForm;
