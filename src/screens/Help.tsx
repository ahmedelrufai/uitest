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
const AddIconOnDark = require("../assets/images/AddIconOnDark.png");
const AddIconOnLight = require("../assets/images/AddIconOnLight.png");
const SearchIconOnDark = require("../assets/images/SearchIconOnDark.png");
const SearchIconOnLight = require("../assets/images/SearchIconOnLight.png");
const ServicesIcon = require("../assets/images/ServicesIcon.png");
const BusinessIcon = require("../assets/images/BusinessIcon.png");
const HandBuggerIcon = require("../assets/images/HandBuggerIcon.png");

interface HelpProps extends NativeStackScreenProps<RootStackParamList, "Help"> {}

const Help: React.FunctionComponent<HelpProps> = ({ navigation }) => {
	const { activeTheme } = useStore();

	return (
		<Container>

		</Container>
	);
};

const ChartWrapper = styled.View``;

const TopItemInnerWrapper = styled.View`
  gap: ${normalizeh(16)}px;
`;

const TopWrapper = styled.View`
  flex-direction: row;
  gap: ${normalizew(40)}px;
`;

const ItemImage = styled.Image`
  width: ${normalizew(128)}px;
  max-width: ${normalizew(128)}px;
  height: auto;
  aspect-ratio: 1;
`;

const TopItem = styled.View<{ colorType: string }>`
  padding: ${normalizeh(40)}px ${normalizew(40)}px;
  height: ${normalizeh(216)}px;
  width: 56%;
  background-color: ${({ colorType, theme }) => theme[colorType]};
  justify-content: space-between;
  border-radius: ${normalizeh(22)}px;
  flex-direction: row;
`;

const Btn = styled(CustomButton)`

`;

const Icon = styled.Image`
  width: ${normalizew(60)}px;
  max-width: ${normalizew(60)}px;
  aspect-ratio: 1;
`;

const ActionsWrapper = styled.View`
  flex-direction: row;
  gap: ${normalizew(32)}px;
  align-items: center;
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${normalizeh(64)}px;
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

export default Help;
