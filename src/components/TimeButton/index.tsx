import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    Container,
    Title
} from './styles';

interface TimeButtonProps extends TouchableOpacityProps {
    title: string;
    isPressed?: boolean
} 

export function TimeButton({
    title,
    isPressed = false,
    ...rest
}: TimeButtonProps){
    return (
        <Container
            isPressed={isPressed}
            {...rest}
        >
            <Title
                isPressed={isPressed}
            >
                { title }
            </Title>
        </Container>
    )
}