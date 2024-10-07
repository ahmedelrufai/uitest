import {createStackNavigator} from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard.tsx";
import React from "react";
import {RootStackParamList} from "./HomeStack.tsx";
import AddBusiness from "../screens/Business.tsx";
import Business from "../screens/Business.tsx";
import SelectService from "../screens/SelectService.tsx";
import Help from "../screens/Help.tsx";

const Stack = createStackNavigator<RootStackParamList>();

export default function HelpStack() {


	return (
		<>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Help">
				<Stack.Screen name={"Help"} component={Help} />
			</Stack.Navigator>


		</>
	);
}


