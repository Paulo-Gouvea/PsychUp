import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { DoctorDetails } from "../screens/DoctorDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes(){
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="doctordetails"
                component={DoctorDetails}
            />
        </Navigator>
    )
}