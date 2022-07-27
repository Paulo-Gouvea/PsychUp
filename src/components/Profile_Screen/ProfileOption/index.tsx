import React from "react";
import { TouchableOpacityProps } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
    Container,
    IconWrapper,
    OptionText,
} from "./styles";

import { useTheme } from "styled-components/native";

interface ProfileOptionProps extends TouchableOpacityProps {
    title: string;
}

export function ProfileOption({
    title,
    ...rest
}: ProfileOptionProps){
    const theme = useTheme();

    return (
        <Container
            {...rest}
        >
            <IconWrapper>
                <FontAwesome 
                    name="user"
                    size={20}
                    color={theme.COLORS.WHITE_900}
                />
            </IconWrapper>

            <OptionText>
                {title}
            </OptionText>
        </Container>
    )
}