import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { Explore, ThirdScreen } from "../Screen";
import NavigationString from "./Constants/NavigationString";
const Stack = createNativeStackNavigator();

function ExploreStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={NavigationString.EXPLORE} component={Explore} />
            <Stack.Screen name={NavigationString.THIRDSCREEN} component={ThirdScreen} />
        </Stack.Navigator>
    );
}
export default ExploreStackScreen