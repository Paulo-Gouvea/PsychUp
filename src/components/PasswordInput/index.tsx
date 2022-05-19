import React from "react";
import { TextInputProps } from "react-native";
import { MaterialIcons, Feather } from '@expo/vector-icons';

import {
    Container,
    IconWrapper,
    InputWrapper,
    TouchableIconWrapper
} from "./styles";

import { useTheme } from "styled-components/native";

interface PasswordInputProps extends TextInputProps{

}

export function PasswordInput({...rest}: PasswordInputProps) {
    const theme = useTheme();

    return (
        <Container>
            <IconWrapper>
                <MaterialIcons 
                    name="lock-outline" 
                    size={20} 
                    color={theme.COLORS.GREY_900} 
                />
            </IconWrapper>

            <InputWrapper 
                {...rest} 
            />

            <TouchableIconWrapper>
                <Feather 
                    name="eye-off" 
                    size={20} 
                    color={theme.COLORS.GREY_900} 
                />
            </TouchableIconWrapper>
        </Container>
    );
}