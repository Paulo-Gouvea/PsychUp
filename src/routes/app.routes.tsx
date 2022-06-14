import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,  
                tabBarActiveBackgroundColor: theme.COLORS.TEAL_700,
                tabBarStyle: {
                    height: RFValue(60),
                    backgroundColor: theme.COLORS.TEAL_900,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6
                }
            }}
        >
            <Screen 
                name="home"
                component={Home}
                options={{
                    tabBarIcon: (({}) => (
                        <Entypo
                            name="home"
                            size={32}
                            color={theme.COLORS.WHITE_900}
                        />
                    ))
                }}
            />

            <Screen 
                name="favorites"
                component={Home}
                options={{
                    tabBarIcon: (({}) => (
                        <Entypo
                            name="heart"
                            size={32}
                            color={theme.COLORS.WHITE_900}
                        />
                    ))
                }}
            />

            <Screen 
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: (({}) => (
                        <FontAwesome
                            name="user"
                            size={32}
                            color={theme.COLORS.WHITE_900}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}