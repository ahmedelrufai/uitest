import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/HomeStack.tsx";
import styled from "styled-components/native";
import CustomText from "../components/custormElements/Text.tsx";
import useStore from "../store/store.ts";
import { normalizeh, normalizew } from "../utils/helpers.ts";
import { SafeAreaView } from "react-native";
import CustomButton from "../components/custormElements/CustomButton.tsx";
import HandBuggerIcon from "../assets/images/HandBuggerIcon.png";
import ServicesWrapper from "../components/service/ServicesWrapper.tsx";
const ServicePlaceHolder = require("../assets/images/ServicePlaceholder.png");
const Star = require("../assets/images/Star.png");

interface SelectServiceProps extends NativeStackScreenProps<RootStackParamList, "SelectService"> {}

const SelectService: React.FunctionComponent<SelectServiceProps> = ({ navigation }) => {
	const { activeTheme } = useStore();

	return (
		<Container>
			<ItemsWrapper>
				<Header>
					<CustomText size={40} weight={500}>
						Select service
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

export default SelectService;
