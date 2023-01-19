import React from "react";
import BottomTab from "../Navigation/BottomTab";
import NavigationString from "../Navigation/Constants/NavigationString";
import { FirstScreen, SecondScreen, ThirdScreen } from "../Screen";

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={NavigationString.TAB} component={BottomTab} />
            
        </>
    )

}


