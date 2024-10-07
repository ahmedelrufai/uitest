import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeStack from "./HomeStack.tsx";
import CustomButton from "../components/custormElements/CustomButton.tsx";
import CustomText from "../components/custormElements/Text.tsx";
import styled, {ThemeProvider} from "styled-components/native";
import useStore from "../store/store.ts";
import { darkTheme, lightTheme } from "../utils/theme.ts";
import { normalizeh, normalizew } from "../utils/helpers.ts";
import ThemeIcon from "../assets/images/navigation/Theme.png";
import LogoutIcon from "../assets/images/navigation/Logout.png";
import BusinessStack from "./BusinessStack.tsx";
import SelectServiceStack from "./SelectServiceStack.tsx";
import CurrentServiceStack from "./CurrentServiceStatck.tsx";
import HelpStack from "./HelpStack.tsx";


const CustomDrawerContent = (props:any) => {
	const { activeTheme, loadTheme, toggleTheme } = useStore();
	const theme = activeTheme === 'light' ? lightTheme : darkTheme;

	const handleClick = () => {

		toggleTheme();
	};

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
			<CustomHeader>
				<CustomText weight={600} size={40}>Dashboard</CustomText>
			</CustomHeader>
			<DrawerItemList {...props} />
			<ThemeButton>
				<CustomButton onPress={handleClick}>
					<ButtonWrapper>

					<Icon style={{tintColor:theme.text}} source={ThemeIcon}  />
					<CustomText>Switch Theme</CustomText>
					</ButtonWrapper>

				</CustomButton>
			</ThemeButton>

			<Bottom>
				<CustomButton onPress={()=>null}>
					<ButtonWrapper>

						<Icon style={{tintColor:theme.text}} source={LogoutIcon} />
						<CustomText>Log Out</CustomText>
					</ButtonWrapper>

				</CustomButton>
			</Bottom>
		</DrawerContentScrollView>
	);
};

const Drawer = createDrawerNavigator();

const MyDrawerNavigator = () => {
	const { activeTheme, loadTheme, toggleTheme } = useStore();
	const theme = activeTheme === 'light' ? lightTheme : darkTheme;
	const drawerLabelStyle={
		color:theme.text,
		fontSize:normalizeh(32)
	}
	return (
		<Drawer.Navigator
			drawerContent={props => <CustomDrawerContent {...props} />}
			screenOptions={{
				headerShown: false,
			 drawerType:"front",
				drawerStyle: {
					backgroundColor: theme.topBackground, // Drawer background color
					width: normalizew(480), // Drawer width
				},
				drawerLabelStyle,
			}}
		>
			<Drawer.Screen
				name="Home"
				component={HomeStack}
				options={{
					drawerLabel: "Overview",
					drawerLabelStyle,
					drawerIcon: () => <Icon style={{tintColor:theme.text}} source={require('../assets/images/navigation/Overview.png')} />,
				}}
			/>

			<Drawer.Screen
				name="Business"
				component={BusinessStack}
				options={{
					drawerLabel: "Business",
					drawerLabelStyle,
					drawerIcon: () => <Icon style={{tintColor:theme.text}} source={require('../assets/images/navigation/BusinessIcon.png')} />,
				}}
			/>
			<Drawer.Screen
				name="SelectService"
				component={SelectServiceStack}
				options={{
					drawerLabel: "Select Service",
					drawerLabelStyle,
					drawerIcon: () => <Icon style={{tintColor:theme.text}} source={require('../assets/images/navigation/SelectServiceIcon.png')} />,
				}}
			/>
			<Drawer.Screen
				name="CurrentService"
				component={CurrentServiceStack}
				options={{
					drawerLabel: "Your Services",
					drawerLabelStyle,
					drawerIcon: () => <Icon style={{tintColor:theme.text}} source={require('../assets/images/navigation/CurrentServiceIcon.png')} />,
				}}
			/>
			<Drawer.Screen
				name="Help"
				component={HelpStack}
				options={{
					drawerLabel: "Help",
					drawerLabelStyle,
					drawerIcon: () => <Icon style={{tintColor:theme.text}} source={require('../assets/images/navigation/HelpIcon.png')} />,
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function DrawerComp() {
	return (
		<NavigationContainer>

				<MyDrawerNavigator />

		</NavigationContainer>
	);
};
const Bottom = styled.View`

   margin-top: auto;
   margin-bottom: 30px;
	width: 100%;
	
  padding: ${normalizeh(40)}px ${normalizew(32)}px;
`
const ThemeButton = styled.View`
  padding: ${normalizeh(40)}px ${normalizew(34)}px;
`;
const Button = styled.TouchableOpacity``
const CustomHeader = styled.View`
  padding: ${normalizeh(40)}px ${normalizew(40)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.borderColor};
  margin-bottom: ${normalizeh(20)}px;
`;
const Icon = styled.Image`
	width: ${normalizew(40)}px;
  max-width: ${normalizew(40)}px;
  max-height: ${normalizew(40)}px;
	aspect-ratio: 1;

`
const ButtonWrapper = styled.View`
flex-direction: row;
	align-items: center;
	gap: ${normalizew(56)}px;
`

