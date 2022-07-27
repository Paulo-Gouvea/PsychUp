import React, {
    useState,
} from "react";
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
    value?: string;
}

export function PasswordInput({
    value,
    ...rest
}: PasswordInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const theme = useTheme();

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value);
    }

    function handlePasswordVisibilityChange(){
        setIsPasswordVisible(prevState => !prevState);
    }

    return (
        <Container
            isFocused={isFocused || isFilled}
        >
            <IconWrapper
            >
                <MaterialIcons 
                    name="lock-outline" 
                    size={20} 
                    color={(isFocused || isFilled) ? theme.COLORS.TEAL_900 : theme.COLORS.GREY_900}  
                />
            </IconWrapper>

            <InputWrapper 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                secureTextEntry={isPasswordVisible}
                {...rest} 
            />

            <TouchableIconWrapper
                onPress={handlePasswordVisibilityChange}
            >
                <Feather 
                    name={isPasswordVisible ? 'eye' : 'eye-off'} 
                    size={20} 
                    color={(isFocused || isFilled) ? theme.COLORS.TEAL_900 : theme.COLORS.GREY_900}  
                />
            </TouchableIconWrapper>
        </Container>
    );
}