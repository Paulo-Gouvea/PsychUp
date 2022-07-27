import React, { useState } from "react";
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
    value?: string;
}

export function Input({
    iconName,
    value,
    ...rest
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value);
    }

    return (
        <Container
            isFocused={isFocused || isFilled}
        >
            <IconWrapper>
                <Feather 
                    name={iconName} 
                    size={20} 
                    color={(isFocused || isFilled) ? theme.COLORS.TEAL_900 : theme.COLORS.GREY_900} 
                />
            </IconWrapper>

            <InputWrapper 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest} 
            />
        </Container>
    );
}