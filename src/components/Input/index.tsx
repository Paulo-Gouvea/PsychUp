import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons';

import {
    Container,
    IconWrapper,
    InputWrapper,
} from "./styles";

import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps{
    iconName: keyof typeof Feather.glyphMap;
}

export function Input({
    iconName,
    ...rest
}: InputProps) {
    const theme = useTheme();

    return (
        <Container>
            <IconWrapper>
                <Feather 
                    name={iconName} 
                    size={20} 
                    color={theme.COLORS.GREY_900} 
                />
            </IconWrapper>

            <InputWrapper 
                {...rest} 
            />
        </Container>
    );
}