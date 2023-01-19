import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationString from "./Constants/NavigationString";
import { FirstScreen, Home } from "../Screen";
const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={NavigationString.HOME} component={Home} />
      <Stack.Screen name={NavigationString.FIRSTSCREEN} component={FirstScreen} />
    </Stack.Navigator>
  );
}
export default HomeStackScreen