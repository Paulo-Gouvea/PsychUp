import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
    Container,
} from "./styles";

interface SocialAccountButtonProps extends TouchableOpacityProps {

}

export function SocialAccountButton({
    ...rest
}: SocialAccountButtonProps){
    return (
        <Container
            {...rest}
        >

        </Container>
    );
}