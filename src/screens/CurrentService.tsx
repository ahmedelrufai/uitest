import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/HomeStack.tsx";
import styled from "styled-components/native";
import CustomText from "../components/custormElements/Text.tsx";
import useStore from "../store/store.ts";
import { normalizeh, normalizew } from "../utils/helpers.ts";
import { SafeAreaView, ScrollView } from "react-native";
import { darkTheme, lightTheme } from "../utils/theme.ts";
import Activity from "../components/dashboard/Activity.tsx";
import Services from "../components/dashboard/Services.tsx";
import Notifications from "../components/dashboard/Notifications.tsx";
import CustomButton from "../components/custormElements/CustomButton.tsx";
import ServicesWrapper from "../components/service/ServicesWrapper.tsx";
const AddIconOnDark = require("../assets/images/AddIconOnDark.png");
const AddIconOnLight = require("../assets/images/AddIconOnLight.png");
const SearchIconOnDark = require("../assets/images/SearchIconOnDark.png");
const SearchIconOnLight = require("../assets/images/SearchIconOnLight.png");
const ServicesIcon = require("../assets/images/ServicesIcon.png");
const BusinessIcon = require("../assets/images/BusinessIcon.png");
const HandBuggerIcon = require("../assets/images/HandBuggerIcon.png");

interface CurrentServiceProps extends NativeStackScreenProps<RootStackParamList, "CurrentService"> {}

const CurrentService: React.FunctionComponent<CurrentServiceProps> = ({ navigation }) => {
	const { activeTheme } = useStore();

	return (
		<Container>
			<ItemsWrapper>
				<Header>
					<CustomText size={40} weight={500}>
						My services
					</CustomText>

					<CustomButton
						onPress={() => {
							// @ts-ignore
							return navigation?.openDrawer();
						}}
					>
						<Icon resizeMode={"contain"} source={HandBuggerIcon} />

					</CustomButton>
				</Header>
				<ServicesWrapper />
				{/* Rendering 12 items using map */}
			</ItemsWrapper>
		</Container>
	);
};

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${normalizeh(64)}px;
`;

const Icon = styled.Image`
  width: ${normalizew(60)}px;
  max-width: ${normalizew(60)}px;
  max-height: ${normalizeh(60)}px;
`;

const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

const ItemsWrapper = styled.View`
  padding: ${normalizeh(40)}px ${normalizew(40)}px;
  gap: ${normalizeh(40)}px;
`;

export default CurrentService;
