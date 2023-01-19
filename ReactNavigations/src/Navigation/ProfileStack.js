import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationString from "./Constants/NavigationString";
import { FirstScreen, Home, Profile, SecondScreen } from "../Screen";
const Stack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={NavigationString.PROFILE} component={Profile} />
      <Stack.Screen name={NavigationString.SECONDSCREEN} component={SecondScreen} />
    </Stack.Navigator>
  );
}
export default ProfileStackScreen