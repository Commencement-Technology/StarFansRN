import { RootStackParamList } from "./types";
import HomeScreen from "../screen/HomeScreen/HomeScreen";
import TaskScreen from "../screen/CharacterScreen/CharacterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SCREENS } from "@constants/screens";

const RootStack = createStackNavigator<RootStackParamList>();

const NavigationProvider = (): React.ReactNode => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name={SCREENS.HOME} component={HomeScreen} />
      </RootStack.Group>

      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name={SCREENS.CHARACTER} component={TaskScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  </NavigationContainer>
);

export default NavigationProvider;
