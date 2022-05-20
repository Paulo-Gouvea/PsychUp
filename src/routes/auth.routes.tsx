import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { ForgotPassword } from "../screens/ForgotPassword";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false  
            }}
        >
            <Screen 
                name="login"
                component={Login}
            />

            <Screen 
                name="signup"
                component={SignUp}
            />

            <Screen 
                name="forgotpassword"
                component={ForgotPassword}
            />
        </Navigator>
    );
}