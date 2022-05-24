import React from "react";
import { TouchableOpacityProps } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import {
    Container,
    Title,
} from "./styles";

import loadingAnimation from "../../assets/Loading.json";

interface Buttonprops extends TouchableOpacityProps {
    title: string;
    isLoading?: boolean;
}

export function Button({
    title,
    isLoading = false,
    ...rest
}: Buttonprops){
    return(
        <Container
            isLoading={isLoading}
            {...rest}
        >
            {
                isLoading
                ?
                <AnimatedLottieView 
                    source={loadingAnimation}
                    style={{ height: 50 }}
                    resizeMode='contain'
                    autoPlay
                    loop
                />
                :
                <Title>
                    {title}
                </Title>
            }
        </Container>
    );
}