import {createStackNavigator} from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard.tsx";
import React from "react";
import {RootStackParamList} from "./HomeStack.tsx";
import AddBusiness from "../screens/Business.tsx";
import Business from "../screens/Business.tsx";
import SelectService from "../screens/SelectService.tsx";
import CurrentService from "../screens/CurrentService.tsx";

const Stack = createStackNavigator<RootStackParamList>();

export default function CurrentServiceStack() {


	return (
		<>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="CurrentService">
				<Stack.Screen name={"CurrentService"} component={CurrentService} />
			</Stack.Navigator>


		</>
	);
}


