import React from "react";
import { TouchableOpacityProps } from "react-native";
import { 
    Container,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "styled-components/native";

interface GreenGoBackButtonProps extends TouchableOpacityProps {}

export function GreenGoBackButton({
    ...rest
}: GreenGoBackButtonProps){
    const theme = useTheme();

    return (
        <Container
            {...rest}
        >
            <Ionicons 
                name="chevron-back"
                size={28}
                color={theme.COLORS.WHITE_900}
            />
        </Container>
    );
}