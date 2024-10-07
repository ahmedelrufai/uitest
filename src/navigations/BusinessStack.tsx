import {createStackNavigator} from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard.tsx";
import React from "react";
import {RootStackParamList} from "./HomeStack.tsx";
import AddBusiness from "../screens/Business.tsx";
import Business from "../screens/Business.tsx";

const Stack = createStackNavigator<RootStackParamList>();

export default function BusinessStack() {


	return (
		<>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Business">
				<Stack.Screen name={"Business"} component={Business} />
			</Stack.Navigator>


		</>
	);
}


