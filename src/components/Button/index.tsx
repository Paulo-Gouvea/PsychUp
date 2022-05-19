import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    Container,
    Title,
} from "./styles";

interface Buttonprops extends TouchableOpacityProps {
    title: string;
}

export function Button({
    title,
    ...rest
}: Buttonprops){
    return(
        <Container
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    );
}