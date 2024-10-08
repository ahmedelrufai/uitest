import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "../screens/Auth.tsx";
import Dashboard from "../screens/Dashboard.tsx";
import Business from "../screens/Business.tsx";


export type RootStackParamList = {
  Auth:undefined;
  Dashboard:undefined;
  AddBusiness:undefined;
  Business:undefined;
	SelectService:undefined;
  CurrentService:undefined;
  Help:undefined;
  Subscription:undefined;
  Plan:undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeStack() {


  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard">
        {/*<Stack.Screen name={"Auth"} component={Auth} />*/}
        <Stack.Screen name={"Dashboard"} component={Dashboard} />

      </Stack.Navigator>


    </>
  );
}


