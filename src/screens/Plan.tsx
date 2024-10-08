import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/HomeStack.tsx";
import styled from "styled-components/native";
import useStore from "../store/store.ts";
import { normalizeh, normalizew } from "../utils/helpers.ts";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import CustomText from "../components/custormElements/Text.tsx";
import {darkTheme, lightTheme} from "../utils/theme.ts";
import CustomButton from "../components/custormElements/CustomButton.tsx";
const Bell = require("../assets/images/Bell.png");
const PlanImage = require("../assets/images/PlanImage.png");
const PremiumIconActive = require("../assets/images/PremiumIconActive.png");
const PremiumIconNotActive = require("../assets/images/PremiumIconNotActive.png");


interface PlanProps extends NativeStackScreenProps<RootStackParamList, "Plan"> {}

const Plan: React.FunctionComponent<PlanProps> = ({ navigation }) => {
	const { activeTheme } = useStore();
  const theme = activeTheme==="dark"?darkTheme:lightTheme;
	// Define the plans array with three plans
	const plans = [
		{ id: 1, price: "$120", duration: "1 MONTH" },
		{ id: 2, price: "$320", duration: "3 MONTHS" },
		{ id: 3, price: "$600", duration: "6 MONTHS" },
	];

	// State to track the active plan, default to the first plan
	const [activePlan, setActivePlan] = useState(1);

	// Function to handle plan selection
	const handleSelectPlan = (planId: number) => {
		setActivePlan(planId);
	};

	return (
		<Container>
			<HeaderWrapper>
				<CustomText size={48} weight={500}>Premium Plans</CustomText>
				<Icon style={{tintColor:activeTheme==="dark"?lightTheme.background:darkTheme.background}} source={Bell} />
			</HeaderWrapper>
			<Image source={PlanImage} />

			<ScrollView contentContainerStyle={{width:normalizew(714),gap:normalizew(64)}}>
				{plans.map((plan) => 	{
					const isActive = activePlan === plan.id;
					const color = isActive?lightTheme.text:lightTheme.white;
					return<InnerWrapper
						key={plan.id}
						style={{
							backgroundColor:
								isActive ? lightTheme.white : lightTheme.subsOrange,
						}}
					>
						<CustomButton onPress={() => handleSelectPlan(plan.id)}>

								<Price>
									<Icon resizeMode={"contain"} style={{width:normalizew(56),height:normalizeh(56)}} source={isActive ? PremiumIconActive:PremiumIconNotActive} />
									<CustomText color={color} size={60} weight={800}>
										{plan.price}
									</CustomText>
									<StraightLine style={{borderLeftColor:color}} />
									<DurationWrapper>
										<CustomText color={color} size={36} weight={800}>
											{plan.duration}
										</CustomText>
										<CustomText color={color} size={20}>
											Access to all feature
										</CustomText>
									</DurationWrapper>

								</Price>
						</CustomButton>
					</InnerWrapper>}

				)}
				<ButtonWrapper>
					<CustomButton onPress={() => navigation.navigate("Overview")}>
						<InnerButton>
							<CustomText >Subscribe Now</CustomText>
						</InnerButton>
					</CustomButton>
				</ButtonWrapper>

			</ScrollView>

		</Container>
	);
};
const DurationWrapper = styled.View`
width: ${normalizew(216)}px;
	align-items: center;
	justify-content: center;
`
const Price = styled.View`
  flex-direction: row;
  justify-content: space-between;
	align-items: center;
`;
const StraightLine = styled.View`
  min-width: 2px;
  height: 100%;
  border-left-color: ${({ theme }) => theme.white};
  border-left-width: 2px;
`;
const ButtonWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const InnerButton = styled.View`
  border: 1px solid ${({theme})=>theme.lineColor};
  padding: ${normalizeh(24)}px ${normalizew(48)}px;
  border-radius: ${normalizeh(32)}px;
`;

const InnerWrapper = styled.View`
  width: 100%;
  gap: ${normalizeh(32)}px;
  padding: ${normalizeh(32)}px ${normalizew(48)}px;
  border: 1px solid ${({theme})=>theme.lineColor};
  border-radius: ${normalizeh(64)}px;
`;
const Image = styled.Image`
  width: ${normalizew(472)}px;
  max-width: ${normalizew(472)}px;
  height: ${normalizew(304)}px;
	margin-bottom: ${normalizeh(48)}px;
`;
const HeaderWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: ${normalizew(64)}px;
  padding: ${normalizeh(32)}px ${normalizew(32)}px;
`;
const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
	gap: ${normalizeh(48)}px;
`;
const Icon = styled.Image`
  width: ${normalizew(36)}px;
  aspect-ratio: 1;
`;

export default Plan;
