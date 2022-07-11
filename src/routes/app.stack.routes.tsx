import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppTabRoutes } from "./app.tab.routes";
import { DoctorDetails } from "../screens/DoctorDetails";
import { DateAndTime } from "../screens/DateAndTime";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes(){
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="apptabroutes"
                component={AppTabRoutes}
            />

            <Screen
                name="doctordetails"
                component={DoctorDetails}
            />

            <Screen
                name="dateandtime"
                component={DateAndTime}
            />
        </Navigator>
    )
}