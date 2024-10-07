import React, {useRef} from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/HomeStack.tsx";
import styled from "styled-components/native";
import CustomText from "../components/custormElements/Text.tsx";
import useStore from "../store/store.ts";
import { normalizeh, normalizew } from "../utils/helpers.ts";
import { SafeAreaView, ScrollView } from "react-native";
import { darkTheme, lightTheme } from "../utils/theme.ts";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

const HandBuggerIcon = require("../assets/images/HandBuggerIcon.png");
const PlusIcon = require("../assets/images/PlusIcon.png");
import CustomButton from "../components/custormElements/CustomButton.tsx";
import BusinessImage from "../assets/images/BusinessImage.png";
import AddBusinessForm from "../components/business/AddBusinessForm.tsx";

interface BusinessProps extends NativeStackScreenProps<RootStackParamList, "Business"> {}

const Business: React.FunctionComponent<BusinessProps> = ({ navigation }) => {
	const { activeTheme, loadTheme, toggleTheme } = useStore();
	const theme = activeTheme === 'light' ? lightTheme : darkTheme;
	const actionSheetRef = useRef<ActionSheetRef>(null);
  const handleShowActionSheet = () => {
		actionSheetRef?.current?.show();
  }
	const handleHideActionSheet = () => {
		actionSheetRef?.current?.hide();
	}
	return (
		<Container>
			<ItemsWrapper>
				<Header>
					<InnerHeaderWrapper>
						<CustomText size={40} weight={500}>
							Business
						</CustomText>
					</InnerHeaderWrapper>

					<InnerHeaderWrapper>

						<CustomButton onPress={handleShowActionSheet}>
							<Icon resizeMode={"contain"}  source={PlusIcon}  />
						</CustomButton>
						<CustomButton onPress={() => {
							// @ts-ignore
							return navigation?.openDrawer();
						}}>
							<Icon resizeMode={"contain"} source={HandBuggerIcon} />

						</CustomButton>
					</InnerHeaderWrapper>

				</Header>
       <InnerWrapper>
	       <BusinessFallBack>
		       <Image resizeMode={"contain"} source={BusinessImage} />
		       <CustomText>No Business</CustomText>
		       <CustomButton onPress={handleShowActionSheet}>
			       <ButtonWrapper>


				       <CustomText color={theme.white}>Add Business</CustomText>
			       </ButtonWrapper>

		       </CustomButton>
	       </BusinessFallBack>
       </InnerWrapper>

			</ItemsWrapper>
			<ActionSheet ref={actionSheetRef} containerStyle={{backgroundColor:"transparent",  padding:normalizeh(24),paddingBottom:normalizeh(42)}}>
       <AddBusinessForm />
			</ActionSheet>
		</Container>
	);
};
const InnerHeaderWrapper = styled.View`
flex-direction: row;
	gap: ${normalizew(24)}px;
	height: 100%;
	align-items: center;
`
const BusinessFallBack = styled.View`
 width: 100%;
	flex: 1;
	justify-content: flex-start;

	align-items: center;
  padding-top: ${normalizeh(200)}px;
`
const InnerWrapper = styled.View`

	flex: 1;
	width: 100%;
	align-items: center;
	justify-content: center;
	
`
const ButtonWrapper = styled.View`
flex-direction: row;
	align-items: center;
	gap: ${normalizew(16)}px;
	background-color: ${({theme})=>theme.primary};
	border-radius: ${normalizeh(42)}px;
	padding: ${normalizeh(24)}px ${normalizew(48)}px;
	margin-top:  ${normalizeh(24)}px;
`
const Image = styled.Image`

	
	width: ${normalizew(708)}px;

	max-height: ${normalizeh(708)}px;
	
`
const Icon = styled.Image`
  width: ${normalizew(60)}px;
  max-width: ${normalizew(60)}px;
  max-height: ${normalizeh(60)}px;


`;


const Header = styled.View`
  width: 100%;
  height: ${normalizeh(64)}px;
  flex-direction: row;
  justify-content: space-between;


`;

const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

const ItemsWrapper = styled.View`
  padding: ${normalizeh(40)}px ${normalizew(40)}px;
  gap: ${normalizeh(40)}px;
	flex: 1;
`;

export default Business;
