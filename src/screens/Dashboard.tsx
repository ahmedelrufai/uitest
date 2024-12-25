import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/HomeStack.tsx";
import styled from "styled-components/native";
import useStore from "../store/store.ts";
import { SafeAreaView, ScrollView } from "react-native";

// Theme colors for centralized color management
const themeColors = {
	primary: "#9333EA",
	secondary: "#4b5563",
	border: "#edf1f3",
	background: "#f9fafc",
	textPrimary: "#1F2937",
	white: "#fff",
};

// Icons
const icons = {
	back: require("../assets/test/BackIcon.png"),
	shortTerm: require("../assets/test/Baby.png"),
	mediumTerm: require("../assets/test/Clock.png"),
	longTerm: require("../assets/test/CalendarDots.png"),
	veryLongTerm: require("../assets/test/Egg.png"),
	checkboxInactive: require("../assets/test/CheckboxOnly.png"),
	checkboxActive: require("../assets/test/CheckBoxActive.png"),
	arrowRight: require("../assets/test/ArrowRight.png"),
};

const investmentOptions = [
	{
		img: icons.shortTerm,
		title: "Short Term",
		text: "Around 1 - 2 years",
	},
	{
		img: icons.mediumTerm,
		title: "Medium Term",
		text: "Around 2 - 3 years",
	},
	{
		img: icons.longTerm,
		title: "Long Term",
		text: "Around 3 - 5 years",
	},
	{
		img: icons.veryLongTerm,
		title: "Very Long Term",
		text: "Around 5 - 20+ years",
	},
];

interface DashboardProps extends NativeStackScreenProps<RootStackParamList, "Dashboard"> {}

const Dashboard: React.FunctionComponent<DashboardProps> = ({ navigation }) => {
	const { activeTheme } = useStore();
	const [selectedOption, setSelectedOption] = useState("Short Term");

	return (
		<Container>
			<Header>
				<Icon style={{ height: 32, width: 32 }} source={icons.back} />
				<ProgressContainer>
					<ProgressBar />
				</ProgressContainer>
				<SkipButton>
					<SkipButtonText>Skip</SkipButtonText>
				</SkipButton>
			</Header>

			<Title>How long do you plan to invest in crypto?</Title>
			<OptionsWrapper>
				{investmentOptions.map((option) => {
					const isActive = option.title === selectedOption;
					return (
						<OptionItem
							key={option.title}
							active={isActive}
							onPress={() => setSelectedOption(option.title)}
						>
							<OptionContent>
								<Icon
									style={{
										width: 32,
										height: 32,
										tintColor: isActive ? themeColors.primary : themeColors.secondary,
									}}
									source={option.img}
								/>
								<TextWrapper>
									<OptionTitle>{option.title}</OptionTitle>
									<OptionDescription>{option.text}</OptionDescription>
								</TextWrapper>
							</OptionContent>
							<Icon
								style={{ width: 32, height: 32 }}
								source={isActive ? icons.checkboxActive : icons.checkboxInactive}
							/>
						</OptionItem>
					);
				})}
				<ContinueButton>
					<ContinueButtonText>Continue</ContinueButtonText>
					<Icon style={{ width: 24, height: 24 }} source={icons.arrowRight} />
				</ContinueButton>
			</OptionsWrapper>
		</Container>
	);
};

// Styled Components
const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${themeColors.background};
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${themeColors.white};
`;

const ProgressContainer = styled.View`
  width: 180px;
  border: 1px solid ${themeColors.primary};
  border-radius: 4px;
`;

const ProgressBar = styled.View`
  background-color: ${themeColors.primary};
  height: 4px;
  width: 90px;
`;

const SkipButton = styled.TouchableOpacity``;

const SkipButtonText = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: ${themeColors.primary};
`;

const Title = styled.Text`
  color: ${themeColors.textPrimary};
  font-weight: 600;
  font-size: 30px;
  padding: 30px;
  width: 100%;
  text-align: center;
`;

const OptionsWrapper = styled.View`
  gap: 20px;
  padding: 10px 20px;
`;

const OptionItem = styled.TouchableOpacity<{ active: boolean }>`
  width: 100%;
  height: 80px;
  background-color: ${themeColors.white};
  border: 1px solid ${({ active }) => (active ? themeColors.primary : themeColors.border)};
  border-radius: 20px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const OptionContent = styled.View`
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const TextWrapper = styled.View`
  flex-direction: column;
  gap: 10px;
`;

const OptionTitle = styled.Text`
  font-weight: 500;
  font-size: 18px;
`;

const OptionDescription = styled.Text``;

const ContinueButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${themeColors.primary};
  margin-top: 20px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

const ContinueButtonText = styled.Text`
  color: ${themeColors.white};
  font-size: 22px;
`;

const Icon = styled.Image`
  aspect-ratio: 1;
`;

export default Dashboard;
