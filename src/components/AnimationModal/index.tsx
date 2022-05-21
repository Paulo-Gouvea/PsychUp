import React from "react";
import { 
    ModalProps 
} from "react-native";
import AnimatedLottieView from "lottie-react-native";
import {
    Container,
    ModalPosition,
    ModalContent,
    ModalInformationWrapper,
    ModalAnimationWrapper,
    ModalTitle,
    ModalDescription,
} from "./styles";

import successAnimation from "../../assets/SuccessAnimation.json";

import { Button } from "../Button";

interface AppModalProps extends ModalProps {
    title: string;
    description: string;
    onPress: () => void;
}

export function AnimationModal({
    title,
    description,
    onPress,
    ...rest
}: AppModalProps){
    return (
        <Container
            {...rest}
        >
            <ModalPosition>
                <ModalContent>
                    <ModalAnimationWrapper>
                        <AnimatedLottieView 
                            source={successAnimation}
                            style={{ height: 200 }}
                            resizeMode='contain'
                            autoPlay
                            loop
                        />
                    </ModalAnimationWrapper>

                    <ModalInformationWrapper>
                        <ModalTitle>
                            {title}
                        </ModalTitle>

                        <ModalDescription>
                            {description}
                        </ModalDescription>

                        <Button 
                            title="Ok"
                            onPress={onPress}
                        />
                    </ModalInformationWrapper>
                </ModalContent>
            </ModalPosition>
        </Container>
    );
}