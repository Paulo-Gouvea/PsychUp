import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppStackRoutes } from "./app.stack.routes";

import { useAuth } from "../hooks/auth";

export function Routes(){
    const { user } = useAuth();

    return (
        <NavigationContainer>
            {
                user.id
                ?
                <AppStackRoutes />
                :
                <AuthRoutes />
            }
        </NavigationContainer>
    );
}