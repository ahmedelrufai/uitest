import {createStackNavigator} from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard.tsx";
import React from "react";
import {RootStackParamList} from "./HomeStack.tsx";
import AddBusiness from "../screens/Business.tsx";
import Business from "../screens/Business.tsx";
import SelectService from "../screens/SelectService.tsx";
import Subscription from "../screens/Subscription.tsx";
import Plan from "../screens/Plan.tsx";
import Overview from "../screens/bugWatch/Overview.tsx";

const Stack = createStackNavigator<RootStackParamList>();

export default function SelectServiceStack() {


	return (
		<>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SelectService">
				<Stack.Screen name={"SelectService"} component={SelectService} />
				<Stack.Screen name={"Subscription"} component={Subscription} />
				<Stack.Screen name={"Plan"} component={Plan} />
				<Stack.Screen name={"Overview"} component={Overview} />
			</Stack.Navigator>


		</>
	);
}


