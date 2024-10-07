import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/HomeStack.tsx";
import styled from "styled-components/native";

import useStore from "../store/store.ts";
import { normalizeh, normalizew } from "../utils/helpers.ts";
import { SafeAreaView, ScrollView } from "react-native";
import CustomText from "../components/custormElements/Text.tsx";
import {lightTheme} from "../utils/theme.ts";
import CustomButton from "../components/custormElements/CustomButton.tsx";
const Bell = require("../assets/images/Bell.png");
const SubsImage = require("../assets/images/SubsImage.png");
const SubsCheck= require("../assets/images/SubsCheck.png")
interface SubscriptionProps extends NativeStackScreenProps<RootStackParamList, "Subscription"> {}

const Subscription: React.FunctionComponent<SubscriptionProps> = ({ navigation }) => {
	const { activeTheme } = useStore();
	return (
		<Container>
    <HeaderWrapper>
	    <CustomText size={48} weight={500}>Choose your plan</CustomText>
	    <Icon source={Bell} />
    </HeaderWrapper>
			{/*<Image source={SubsImage} />*/}
			<Wrapper>
				<Label>
					<CustomText size={34} weight={600} color={lightTheme.white}>Free Plan</CustomText>
				</Label>
       <InnerWrapper style={{backgroundColor:lightTheme.subsBlue}}>
	       {
					 ["1 Project.","3 Notifications daily.","2 teammate invites.","1 Business.","1 Service."].map(item=>{
						 return <Item key={item}>
							 <Icon resizeMode={"contain"} style={{maxWidth:normalizew(32),maxHeight:normalizeh(32)}} source={SubsCheck} />
							 <CustomText color={lightTheme.white}>{item}</CustomText>
						 </Item>
					 })
	       }
				 <ButtonWrapper>

				 <CustomButton onPress={()=>null} >
					 <InnerButton>

					 <CustomText color={lightTheme.text}>
						 Get Started
					 </CustomText>
					 </InnerButton>

				 </CustomButton>
				 </ButtonWrapper>

       </InnerWrapper>
			</Wrapper>
			<Wrapper>
				<Label>
					<CustomText size={34} weight={600} color={lightTheme.white}>Premium Plan</CustomText>
				</Label>
				<InnerWrapper style={{backgroundColor:lightTheme.subsOrange}}>
					<Price>
						<CustomText color={lightTheme.white} size={60} weight={800}>$120</CustomText>
						<StraightLine />
						<CustomText color={lightTheme.white} size={60} weight={800}>1 MONTH</CustomText>

					</Price>
					{
						["Unlimited Project.","Unlimited Notifications.","Unlimited teammate invites.","Unlimited Businesses.","Unlimited Services."].map(item=>{
							return <Item key={item}>
								<Icon resizeMode={"contain"} style={{maxWidth:normalizew(32),maxHeight:normalizeh(32)}} source={SubsCheck} />
								<CustomText color={lightTheme.white}>{item}</CustomText>
							</Item>
						})
					}
					<ButtonWrapper>

						<CustomButton onPress={()=>null} >
							<InnerButton>

								<CustomText color={lightTheme.text}>
									Choose Plan
								</CustomText>
							</InnerButton>

						</CustomButton>
					</ButtonWrapper>

				</InnerWrapper>
			</Wrapper>
		</Container>
	);
};
const Price = styled.View`
flex-direction: row;
	justify-content: space-between;
`
const StraightLine = styled.View`
min-width: 2px;
	height: 100%;
	border-left-color: ${({theme})=>theme.white};
	border-left-width: 2px;
`
const ButtonWrapper = styled.View`
width: 100%;
	align-items: center;
	justify-content: center;
`
const InnerButton = styled.View`
  background-color: ${lightTheme.white};
  padding: ${normalizeh(24)}px ${normalizew(48)}px;
  border-radius: ${normalizeh(32)}px;
`
const Item = styled.View`
flex-direction: row;
	gap: ${normalizew(32)}px;
`
const Label = styled.View`
background-color: ${lightTheme.lineColor};
	padding: ${normalizeh(24)}px ${normalizew(48)}px;
	width: ${normalizew(358)}px;
	align-items: center;
	justify-content: center;
	border-radius: ${normalizeh(32)}px;
	z-index: 1;
`
const Wrapper = styled.View`
max-width: ${normalizew(624)}px;
	width: 100%;

	align-items: center;
	margin-bottom: ${normalizeh(40)}px;
`
const InnerWrapper = styled.View`
width: 100%;
	gap: ${normalizeh(32)}px;
  padding: ${normalizeh(64)}px ${normalizew(64)}px;
	padding-top: ${normalizeh(82)}px;
	border-radius:${normalizeh(64)}px ;
	margin-top: -${normalizeh(38)}px;
`
const Image = styled.Image`
width: ${normalizew(266)}px;
  max-width: ${normalizew(266)}px;
  height: ${normalizew(266)}px;

`
const HeaderWrapper = styled.View`
justify-content: center;
	align-items: center;
	flex-direction: row;
	column-gap: ${normalizew(64)}px;
	padding: ${normalizeh(32)}px ${normalizew(32)}px;
`
const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
	align-items: center;
`;

const Icon = styled.Image`
	width: ${normalizew(36)}px;
	aspect-ratio: 1;

`


export default Subscription;
