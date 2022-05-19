import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import {
    Container,
} from "./styles";

interface SocialAccountButtonProps extends TouchableOpacityProps {
    Icon: React.FC<SvgProps>;
    width: number;
    height: number;
}

export function SocialAccountButton({
    Icon,
    width,
    height,
    ...rest
}: SocialAccountButtonProps){
    return (
        <Container
            {...rest}
        >
            <Icon 
                width={width}
                height={height}
            />
        </Container>
    );
}